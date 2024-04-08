import { useCounter } from "@/store/useCounter.ts";
import { usePosts } from "@/store/usePosts.ts";
import { useSearch } from "@/store/useSearch.ts";


function useFetchPosts() {
    const [ _, setPosts ] = usePosts("posts");

    async function fetchPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        setPosts(posts)
    }

    return {
        fetchPosts
    }
}

const Counter = () => {
    const [ count, setCount ] = useCounter('count');
    return (
        <div className="grid place-items-center gap-4 border border-gray-800 p-3">
            <p>Count: {count.toString()}</p>
            <div className="flex gap-4">
                <button
                    className="w-40 bg-blue-700 text-white shadow rounded-lg px-4 py-1"
                    onClick={() => setCount(prevValue => prevValue + 1)}>Increment
                </button>
                <button className="w-40 bg-blue-700 text-white shadow rounded-lg px-4 py-1"
                        onClick={() => setCount(prevValue => prevValue - 1)}>Decrement
                </button>
            </div>
        </div>
    );
};

const TextInput = () => {
    const [ text, setText ] = useSearch('text');
    return (
        <div className="border border-gray-800 p-3">
            <label htmlFor="search">Search post: </label>
            <input className="border border-gray-300 "
                   value={text} onChange={(e) => setText(e.target.value)}/>
            <p>Text: {text}</p>
        </div>
    );
};




const ButtonFetchPosts = () => {
    const {
        fetchPosts
    } = useFetchPosts();
    return (
        <button className="w-60 bg-blue-700 text-white shadow rounded-lg px-4 py-1 mx-auto"
                onClick={fetchPosts}>Fetch posts</button>
    );
}
const Posts = () => {
    const [ posts ] = usePosts("posts");
    const [ searchText ] = useSearch('text');
    const postList = posts.filter(post => post.title.includes(searchText))
    return (
        <ul className="grid gap-4">
            {postList.map(post => <li key={post.title}
                                      className="border-b border-gray-800 py-2">{post.title}</li>)}
        </ul>
    );
}


const Footer = () => {
    const [ count ] = useCounter('count');
    const [ searchText ] = useSearch('text');
    return (
        <div className="fixed bottom-0 left-0 w-full flex gap-4 p-2 bg-amber-50">
            <p>Counter : {count}</p>
            <p>Search : {searchText}</p>
        </div>
    )
}


function App() {
    return (
        <main className="grid gap-5 p-10">
            <Counter/>
            <TextInput/>
            <ButtonFetchPosts/>
            <Posts/>
            <Footer/>
        </main>
    )
}

export default App

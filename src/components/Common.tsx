import { useCommon } from "@/store/useCommon.ts";


const Counter = () => {
    const { count, increment, decrement } = useCommon();
    return (
        <div className="grid place-items-center gap-4 border border-gray-800 p-3">
            <p>Count: {count}</p>
            <div className="flex gap-4">
                <button
                    className="w-40 bg-blue-700 text-white shadow rounded-lg px-4 py-1"
                    onClick={increment}>Increment
                </button>
                <button className="w-40 bg-blue-700 text-white shadow rounded-lg px-4 py-1"
                        onClick={decrement}>Decrement
                </button>
            </div>
        </div>
    );
};

const TextInput = () => {
    const { search, setSearch } = useCommon();
    return (
        <div className="border border-gray-800 p-3">
            <label htmlFor="search">Search post: </label>
            <input className="border border-gray-300 "
                   value={search} onChange={(e) => setSearch(e.target.value)}/>
            <p>Text: {search}</p>
        </div>
    );
};


const ButtonFetchPosts = () => {
    const { fetchPosts } = useCommon();
    return (
        <button className="w-60 bg-blue-700 text-white shadow rounded-lg px-4 py-1 mx-auto"
                onClick={fetchPosts}>Fetch posts</button>
    );
}
const Posts = () => {
    const { posts,search } = useCommon();
    const postList = posts.filter(post => post.title.includes(search))
    return (
        <ul className="grid gap-4">
            {postList.map(post => <li key={post.title}
                                      className="border-b border-gray-800 py-2">{post.title}</li>)}
        </ul>
    );
}


const Footer = () => {
    const { search, count } = useCommon();
    return (
        <div className="fixed bottom-0 left-0 w-full flex gap-4 p-2 bg-amber-50">
            <p>Counter : {count}</p>
            <p>Search : {search}</p>
        </div>
    )
}


export default function Common() {
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
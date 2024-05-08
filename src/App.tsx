import { useEffect, useRef, useState } from "react";


export default function App() {
    return (
        <div>
            <SearchResults/>
        </div>
    )
}


function SearchResults() {
    const [ results, setResults ] = useState([]);
    const [ query, setQuery ] = useState("");

    useEffect(() => {
        let ignore = false;
        fetchResults(query).then(json => {
            console.log("ignore", ignore)
            // if (!ignore) {
                setResults(json);// This ensures that when your Effect fetches data, all responses except the last requested one will be ignored.
            // }
        });

        return () => {
            ignore = true
        };
    }, [ query ]);

    return (
        <div>
            <Input query={query} setQuery={setQuery}/>
            <ul>
                {results.map((movie) => (
                    <li key={movie.id}>
                        {movie.title} ({movie.kinds.join(", ")})
                    </li>
                ))}
            </ul>
        </div>
    )
}

function Input({ setQuery, query }) {
    const [search,setSearch] = useState("");
    const timeoutRef = useRef(null); // Reference to store the timeout

    const handleChange = (e) => {
        const newValue = e.target.value;
setSearch(newValue)

        if (timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            setQuery(newValue);
        }, 400);
    }
    return (
        <input
            className="border border-gray-300 p-2"
            type="text" value={search} onChange={handleChange}/>
    )
}

async function fetchResults(query) {
    const minDelay = 100;
    const maxDelay = 5000;
    const seconds = Math.round(Math.random() * (maxDelay - minDelay) + minDelay);
    await new Promise(resolve => setTimeout(resolve, seconds));
    console.log("fetching results in " + seconds + " seconds : ", query);
    return [
        {
            id: 1,
            title: query + seconds,
            kinds: [ "Drama", "Comedy" ],
        }
    ]
}
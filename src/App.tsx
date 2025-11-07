import users from "@/users.ts";
import { useEffect, useState } from "react";
import { getState, setState, subscribe } from "@/utils";

console.log(users)
export default function App() {
    const [ count, setCount ] = useState(getState().count)

    useEffect(() => {
        return subscribe(() => setCount(getState().count))
    }, [])

    return (
        <div>
            <button onClick={()=>setState({ count: getState().count + 1 })}>+ {count}</button>

            <Child/>
        </div>
    );
}

function Child() {
    const [ count, setCount ] = useState(getState().count)

    useEffect(() => {
        return subscribe(() => setCount(getState().count))
    }, [])


    return <h1>{count}</h1>
}
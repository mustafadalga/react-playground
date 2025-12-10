import { useEffect, useState } from "react";
import { getState, setState, subscribe } from "@/utils/createStoreV1.ts";

function Child() {
    const [ count, setCount ] = useState(getState().count)

    useEffect(() => {
        return subscribe(() => setCount(getState().count))
    }, [])


    return <h1>{count}</h1>
}

export default function DemoV1() {
    const [ count, setCount ] = useState(getState().count)

    useEffect(() => {
        return subscribe(() => setCount(getState().count))
    }, [])

    return (
        <div className='border'>
            <button className='px-2 py-2 border' onClick={() => setState({ count: getState().count + 1 })}> increase {count}</button>
            <Child/>
        </div>
    );
}


import { useRef, useState, useEffect, useCallback } from "react"

let x=0
function useTimeout(callback, delay) {
    const timeOut = useRef(null)
    const callBackRef = useRef(callback)

    callBackRef.current=callback

    useEffect(() => {
        if (delay===null) return
        if (timeOut.current) {
            clearTimeout(timeOut.current)
        }

        timeOut.current = setTimeout(()=>{
            callBackRef.current()
            console.log("called")
        }, delay)
        return () => {
            if (timeOut.current) {
                clearTimeout(timeOut.current)
            }
        }

    }, [ delay ])
}

export default function Component() {
    const [ loading, setLoading ] = useState(true);

    useTimeout(() => setLoading(false), 3000);
    console.log(loading)
    const [ count, setCount ] = useState(0)
    return (
        <div onClick={() => setCount(prevState => ++prevState)}>
            {count}
            <p>{loading ? 'Loading' : 'Ready'}</p>
        </div>
    );
}

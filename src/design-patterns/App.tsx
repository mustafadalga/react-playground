import { Observable } from "./Observable.ts";
import EventEmitter from "@/algorithm/eventEmitter.ts";
import { useEffect, useState } from "react";

const observable = new Observable()
const emitter = new EventEmitter()

function handleClick() {
    observable.notify("User clicked button!");
}

function handleToggle() {
    observable.notify("User toggled switch!");
}

function logger(data) {
    console.log(`log:${Date.now()} ${data}`);
}

function reFetch() {
    console.log("refetch")
}

observable.subscribe(logger);
observable.subscribe(reFetch);

export function CounterButton() {
    const increment = () => {
        emitter.emit('increment', 1);
    };

    return <button onClick={increment}>Increment</button>;
}

// Component B: reacts to changes
export function CounterDisplay() {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        const listener = (value: number) => setCount(prev => prev + value);
        emitter.on('increment', listener);

        return () => {
            emitter.off('increment', listener);
        };
    }, []);

    return <div>Count: {count}</div>;
}


export default function App() {
    return (
        <div className="App">
            <CounterDisplay/>
            <CounterButton/>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={handleToggle}>toggle</button>
        </div>
    );
}
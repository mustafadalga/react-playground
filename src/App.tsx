import React, { useState, useDeferredValue, useTransition, Suspense } from 'react';

function UseTransition() {
    const [ inputValue, setInputValue ] = useState('');
    const [ list, setList ] = useState([]);
    const [ isPending, startTransition ] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        // Düşük öncelikli bir işlem başlatıyoruz.
        startTransition(() => {
            const newList = Array(10000)
                .fill(0)
                .map((_, index) => `${value} - Item ${index + 1}`);
            setList(newList);
        });
    };

    return (
        <div>

            <input type="text" value={inputValue} onChange={handleChange} placeholder="Type something to see "/>
            {isPending ? <p>Loading...</p> : <ul>{list.map((item, index) => <li key={index}>{item}</li>)}</ul>}
        </div>
    );
}

function UseDeferredValue() {
    const [ inputValue, setInputValue ] = useState('');
    const deferredInput = useDeferredValue(inputValue);

    // Büyük bir listeyi filtreleme işlemi
    const filteredList = Array(10000)
        .fill(0)
        .map((_, index) => `${deferredInput} - Item ${index + 1}`);

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <ul>{filteredList.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
    );
}

function AutomaticBatching() {
    // Another feature that comes with React 18 is automatic batching. Now multiple state updates are combined into the same event handler and processed in a single render cycle.
    const [ count1, setCount1 ] = useState(0);
    const [ count2, setCount2 ] = useState(0);

    const handleClick = () => {
// In React 18, these two state updates automatically work in batch.
        setCount1((prev) => prev + 1);
        setCount2((prev) => prev + 1);
    };

    return (
        <div>
            <p>Count 1: {count1}</p>
            <p>Count 2: {count2}</p>
            <button onClick={handleClick}>Increase Counts</button>
        </div>
    );
}


async function delayedImport(importPromise, ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
    const module = await importPromise
    return module
}

const DataComponent = React.lazy(() =>
    delayedImport(import('./DataComponent'), 3000) // Simulates a 3-second delay
);

function SuspenseComponent() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DataComponent/>
        </Suspense>
    );
}

export default function App() {

    return (
        <main className="grid grid-cols-4">
            <UseTransition/>
            <UseDeferredValue/>
            <AutomaticBatching/>
            <SuspenseComponent/>
        </main>
    )
}

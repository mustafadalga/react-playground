import React, { memo, useMemo, useRef, useState } from "react";

const SomeNestedChild = () => {
    const renderCount = useRef(0);
    renderCount.current += 1;

    console.log("SomeNestedChild");
    return (
        <div className="border p-4 m-3">
            <div>SomeNestedChild Render count: {renderCount.current}</div>
        </div>
    )
};

const HeavyChild = memo(({ id, children }) => {
    const renderCount = useRef(0);
    renderCount.current += 1;
    return (
        <div className="border p-4 m-3">
            <div>{id}</div>
            <div>HeavyChild Render count: {renderCount.current}</div>
            Child:{children}
        </div>
    )

});

export default function Parent() {
    const [ state, setState ] = useState(true);
    const memoizedChild = useMemo(() => <SomeNestedChild/>, []);
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div className="grid content-baseline border border-purple-700 p-4">
            <h1 className="font-bold text-xl">Optimizing React Components: Preventing Unnecessary Re-renders with Memoized JSX Props</h1>
            <p className="mb-5">
                Understand how to avoid unnecessary re-renders in React components when passing JSX as props or
                children. This guide breaks down why components like <code>HeavyChild</code> may re-render when a parent
                updates, even with <code>React.memo</code>, due to changing prop references. Learn to
                use <code>useMemo</code> to memoize JSX elements, maintain stable references, and ensure optimal
                performance and efficient component behavior.
            </p>

            <div>Parent Render count: {renderCount.current}</div>
            <button onClick={() => setState((prev) => !prev)} className="bg-cyan-300 p-1">Render Parent</button>


            <HeavyChild id="with children props" children={memoizedChild}/>
            <HeavyChild id="with slot">
                {memoizedChild}
            </HeavyChild>
        </div>
    );
}
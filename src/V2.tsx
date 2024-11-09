import React, { memo, useMemo, useRef, useState } from "react";

const DataComponent = () => {
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div className="border p-4 m-3">
            <div>DataComponent</div>
            <div>Render count: {renderCount.current}</div>
        </div>
    )
}

const Child = ({ left, children }) => {
    const renderCount = useRef(0);
    renderCount.current += 1;
    console.log(left,222)

    return (
        <div className="border p-4 m-3">
            <div>Child value : {left}</div>
            <div>Render count: {renderCount.current}</div>
            {children}
        </div>
    )
};


const GrandChild = () => {
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div className="border p-4 m-3">
            <div>GrandChild Component</div>
            <div>Render count: {renderCount.current}</div>
        </div>
    )
};

const ChildWithMemo = memo(Child)
const GrandChildWithMemo = memo(GrandChild)
const DataComponentWithMemo=memo(DataComponent)

const BadPractice = () => {
    const [ count, setCount ] = useState(0);

    return (
        <div className="grid">
            <button onClick={() => setCount(count + 1)} className="bg-cyan-300 p-1">Re-render Parent</button>
            <div>Parent render count: {count}</div>
            <ChildWithMemo left={<DataComponent/>}>
                <GrandChild/>
            </ChildWithMemo>
        </div>
    )
}

const GoodPractice = () => {
    const [ count, setCount ] = useState(0);
    const memoizedLeft = useMemo(() => <DataComponentWithMemo/>, []);
    const memoGrandChild = useMemo(() => <GrandChild/>, []);


    return (
        <div className="grid">
            <button onClick={() => setCount(count + 1)} className="bg-cyan-300 p-1">Re-render Parent</button>
            <div>Parent render count: {count}</div>
            <ChildWithMemo left={memoizedLeft}>
                {memoGrandChild}
            </ChildWithMemo>
        </div>
    )
}


const V2 = () => {
    return (
        <div className="grid content-baseline border border-purple-700 p-4">
            <h1 className="text-xl mb-10 font-bold">
                Optimizing React Component Re-renders: Proper Memoization of JSX Props and Children
            </h1>
            <p className="mb-5">
                Delve into the nuances of React.memo and why components sometimes re-render unexpectedly when JSX
                elements are passed as props. This example contrasts a standard approach where HeavyChild and
                SomeNestedChild re-render due to new references, with a refined method using useMemo to ensure
                consistent prop references. By properly memoizing JSX elements, you can maintain stable props and
                prevent unnecessary re-renders, optimizing component performance and rendering behavior in React.
            </p>
            <BadPractice/>
            <GoodPractice/>
        </div>
    );
};

export default V2;


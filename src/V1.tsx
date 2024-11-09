import React, { ReactNode, useRef, useState } from "react";

const VerySlowComponent = () => {
    const renderCount = useRef(0);
    renderCount.current += 1;

    console.log("Very slow component re-renders", renderCount.current);
    return (
        <div>
            <div>Very slow component</div>
            <div>Render count: {renderCount.current}</div>
        </div>
    )
};

const BadPractice = () => {
    const [ state, setState ] = useState(1);

    const onClick = () => {
        setState(state + 1);
    };

    return (
        <div className="grid border border-red-500 p-4 m-4">
            <h3>component with everything</h3>
            <p>Click this button - "slow" component will re-render</p>
            <p>Re-render count: {state}</p>
            <button onClick={onClick} className="bg-cyan-300 p-1">click here</button>
            <VerySlowComponent/>
        </div>
    );
};


const Button = () => {
    const [ state, setState ] = useState(1);

    const onClick = () => {
        setState(state + 1);
    };
    return (
        <button onClick={onClick} className="bg-cyan-300 p-1">click here {state}</button>
    )
}

const GoodPractice = () => {


    return (
        <div className="grid border border-green-500 p-4 m-4">
            <Button/>
            <VerySlowComponent/>
        </div>
    )
}

const ButtonWithSlot = ({ children }: { children: ReactNode }) => {
    const [ state, setState ] = useState(1);

    const onClick = () => {
        setState(state + 1);
    };

    return (
        <button type="button" onClick={onClick}>
            <p>Re-render count: {state}</p>
            {children}
        </button>
    );
};

const GoodPracticeV2 = () => {
    return (
        <div className="grid border border-green-500 p-4 m-4">xx
            <ButtonWithSlot children={<VerySlowComponent/>}>

            </ButtonWithSlot>
        </div>
    )
}

const V1 = () => {
    return (
        <div className="grid content-baseline border border-purple-700  p-4">
            <h1 className="text-xl mb-10 font-bold">
                Optimizing React Components: Preventing Unnecessary Re-renders with Proper Composition


            </h1>
            <p className="mb-5">
                This code example explores how different React component structures affect re-render behavior and
                performance. By comparing BadPractice, GoodPractice, and GoodPracticeV2, we demonstrate how to optimize
                components to prevent unnecessary re-renders. Learn how to isolate state, use React.memo, and apply
                composition techniques effectively with children props. This guide helps you understand when and why
                components like VerySlowComponent re-render and how to structure components for better rendering
                performance in React applications.


            </p>
            <BadPractice/>
            <GoodPractice/>
            <GoodPracticeV2/>
        </div>
    );
};

export default V1;

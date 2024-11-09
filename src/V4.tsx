import React, {
    useState,
    createContext,
    useContext,
    useMemo,
    ReactNode, useRef, memo
} from "react";

const Context = createContext<{ count: number; name: string }>({
    count: 1,
    name: "React.js"
});

const Provider = ({ children }: { children: ReactNode }) => {
    const [ state, setState ] = useState(1);

    const onClick = () => {
        setState(state + 1);
    };

    const value = useMemo(
        () => ({
            value: state,
            name: "React 18"
        }),
        [ state ]
    );
    return (
        <Context.Provider value={value}>
            <button onClick={onClick} className="bg-cyan-300 p-1">click here</button>
            {children}
        </Context.Provider>
    );
};

const useValue = () => useContext(Context);

const Count = () => {
    const { count } = useValue();
    const renderCount = useRef(0);
    renderCount.current += 1;
    return (<div className="border p-4 m-3">
        Value:{count}
        <div>Count Render count: {renderCount.current}</div>
    </div>)
};

const Name = () => {
    const { name } = useValue();
    console.log(name)
    const renderCount = useRef(0);
    renderCount.current += 1;
    return (<div className="border p-4 m-3">
        Value:{name}
        <div>Name Render count: {renderCount.current}</div>
    </div>)
};


const NameWithProps = ({ name }: { name: string }) => {
    const renderCount = useRef(0);
    renderCount.current += 1;
    return (<div className="border p-4 m-3">
        Value:{name}
        <div>NameWithProps Render count: {renderCount.current}</div>
    </div>)
};

const withNameFromContext = (Component) => {
    const ComponentMemo = memo(Component);
    console.log("ComponentMemo");

    return () => {
        const { name } = useValue();
        return <ComponentMemo name={name}/>;
    };
};

const NameWithHOC = withNameFromContext(NameWithProps);

function call() {
    console.log("call");
    return "call"
}

const App = () => {

    return (
        <div className="grid content-baseline border border-purple-700 p-4">
            <h1 className="font-bold text-xl">React Context and Memoization: Optimizing Component Renders with Hooks and HOCs

            </h1>
            <p className="mb-5">
                This example demonstrates the use of React Context and memoization to manage and optimize component
                rendering. It explores how useContext and useMemo are utilized within a context provider (Provider) to
                manage and update state efficiently. Components like Count, Name, and NameWithProps show how rendering
                behavior can be tracked using useRef to monitor render counts. The code further includes a higher-order
                component (withNameFromContext) that leverages React.memo to wrap NameWithProps, illustrating a way to
                extract context values while minimizing unnecessary re-renders and enhancing performance.
            </p>
            <Provider>
                {call()}
                <Count/>
                <Name/>
                <NameWithHOC/>
            </Provider>
        </div>
    )
};

export default App;

import { createElement, useEffect, useState } from "react";
// https://www.developerway.com/posts/reconciliation-in-react

function Input({ id, placeholder, onChange, label }) {
    const [ count, setCount ] = useState(0);
    useEffect(() => {
        console.log(`Input mounted`);

        return () => {
            console.log("unmount InputCountry", id)
        }
    }, []);

    return (
        <div className="border grid gap-4">
            <label onClick={() => setCount(prevState => prevState + 1)}>{label} {count}</label>
            <input
                type="text"
                onChange={onChange}
                id={id}
                placeholder={placeholder}
            />
        </div>
    );
}


/**
 * components don't unmount. Just props change and rerender because positions are same and type is same
 *
 * [
 *   {
 *     type: Checkbox,
 *   },
 *   {
 *     type: Input, // our conditional input
 *   },
 * ];
 *
 * @constructor
 */
function Example1() {
    const [ isCompany2, setIsCompany2 ] = useState(false);
    return (
        <div className="flex gap-5">
            <button onClick={() => setIsCompany2(prevState => !prevState)}>Click {isCompany2.toString()}</button>
            {isCompany2 ? (
                <Input
                    label="Company Tax Id"
                    placeholder="Enter 12 digits"
                    onChange={() => {
                    }}
                    id="company-tax-id"
                />
            ) : (
                <Input
                    label="Person Tax Id"
                    placeholder="Enter 8 digits and 3 letters"
                    onChange={() => {
                    }}
                    id="person-tax-id"
                />
            )}
        </div>
    )
}


/**
 * And 💥: magically, by changing the inputs' position in the render output, without changing anything else in the logic,
 * the bug is fixed, and inputs behave exactly as I would expect!
 */
function Example2() {
    const [ isCompany2, setIsCompany2 ] = useState(false);
    return (
        <div className="flex gap-5">
            <button onClick={() => setIsCompany2(prevState => !prevState)}>Click {isCompany2.toString()}</button>
            {isCompany2 ? (
                <Input
                    label="Company Tax Id"
                    placeholder="Enter 12 digits"
                    onChange={() => {
                    }}
                    id="company-tax-id"
                />
            ) : null}

            {isCompany2 ? null : (
                <Input
                    label="Company Tax Id"
                    placeholder="Enter 12 digits"
                    onChange={() => {
                    }}
                    id="company-tax-id"
                />
            )}
        </div>
    )
}

/**
 * React sees an array of children and sees that before and after re-renders, there is an element with the Input type and the same "key."
 * So it will think that the Input component just changed its position in the array and will re-use the already created instance for it.
 * If we type something, the state is preserved even though the Inputs are technically different.
 * @constructor
 */
function Example3() {
    const [ isCompany2, setIsCompany2 ] = useState(false);
    return (
        <div className="flex gap-5">
            <button onClick={() => setIsCompany2(prevState => !prevState)}>Click {isCompany2.toString()}</button>
            {isCompany2 ? (
                <Input
                    label="Company Tax Id"
                    placeholder="Enter 12 digits"
                    onChange={() => {
                    }}
                    key="input"
                    id="company-tax-id"
                />
            ) : null}

            {isCompany2 ? null : (
                <Input
                    label="Company Tax Id"
                    placeholder="Enter 12 digits"
                    key="input"
                    onChange={() => {
                    }}
                    id="company-tax-id"
                />
            )}
        </div>
    )
}


function Example4() {
    const [ isCompany2, setIsCompany2 ] = useState(false);
    return (
        <div className="flex gap-5">
            <button onClick={() => setIsCompany2(prevState => !prevState)}>Click {isCompany2.toString()}</button>
            {isCompany2 ? (
                <Input
                    key="company-tax-id"
                    label="Company Tax Id"
                    placeholder="Enter 12 digits"
                    onChange={() => {
                    }}
                    id="company-tax-id"
                />
            ) : (
                <Input
                    key="person-tax-id"
                    label="Person Tax Id"
                    placeholder="Enter 8 digits and 3 letters"
                    onChange={() => {
                    }}
                    id="person-tax-id"
                />
            )}
        </div>
    )
}

/**
 * * Components don't unmount; their positions simply change, and React re-renders them.
 *  * The "null" and "some-key" keys do not cause React to remove or recreate the components.
 *  * Instead, React reuses the components and updates their positions in the DOM. *
 * Before
 * [
 *   {
 *     type: Checkbox,
 *   },
 *   {
 *     type: Input,
 *     key:null
 *   },
 *     {
 *     type: Input,
 *     key:"some-key"
 *   },
 * ];
 *
 *
 * After
 * [
 *   {
 *     type: Checkbox,
 *   },
 *    {
 *     type: Input,
 *     key:"some-key"
 *   },
 {
 type: Input,
 key:null
 },
 * ];
 *
 * @constructor
 */
const Example5 = () => {
    const [isReverse, setIsReverse] = useState(false);
    // no-one cares about "key" here
    return (
        <>
            <input type="checkbox" onChange={() => setIsReverse(!isReverse)}/>
            <Input key={isReverse ? 'some-key' : null}/>
            <Input key={!isReverse ? 'some-key' : null}/>
        </>
    );
};


/**
 * In this example, even if the `Input` component has the key `3` in both the dynamic array and the manual `Input`,
 * React will not re-render or move the static `Input` (key `3`) to a new position unnecessarily.
 * When we mix dynamic and static elements, like in the code above,
 * React creates an array of the dynamic elements and makes that entire array the first child in the children's array.
 *
 * This is the definition object React will create for this code:
 *
 * [
 *   // The entire dynamic array is the first position in the children's array
 *   [
 *     { type: Input, key: 1 },
 *     { type: Input, key: 2 },
 *     { type: Input, key: 3 }
 *   ],
 *   {
 *     type: Input, key: 3 // This is our manual Input after the dynamic array
 *   }
 * ];
 *
 * The manual `Input` will always occupy the second position in the array of children.
 * There will be no re-mounting and no unnecessary rendering of components.
 * This ensures React optimizes performance effectively, so there's no need to worry about a performance disaster.
 */
const Example6 = () => {
    const [ inputs, setInputs ] = useState([ 1, 2 ]);
    return (
        <>
            <button onClick={() => setInputs(prevState => [ ...prevState, 3 ])}>Add new input</button>
            {inputs.map(input=><Input key={input} id={input}/>)}
            <Input key={3} id={3}/>
        </>
    );
};

function App() {

    return (
        <div className="grid gap-5">
            <Example1/>
            <Example2/>
            <Example3/>
            <Example4/>
            <div className="border p-10">
                <Example5/>
            </div>
            <div className="border p-10">
                <Example6/>
            </div>
        </div>
    )
}

const inspectVDOM = (Component) => {
    // Create the virtual DOM element
    const vdom = createElement(Example5);

    // Log the structure of the virtual DOM
    console.log(JSON.stringify(vdom, null, 2));
};

inspectVDOM(Example1);


export default App

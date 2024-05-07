import { useEffect, useMemo, useState } from "react";


export default function App() {
    return (
        <div>
            <ParentComponent/>
        </div>
    )
}


function ParentComponent() {
    const [ toggleState, setToggleState ] = useState(false);

    function handleToggleChange(newState) {
        console.log('Toggle Changed:ParentComponent - ', newState);
        setToggleState(newState);
    }

    return (
        <div>
            <h1>Toggle State: {toggleState ? 'On' : 'Off'}</h1>
            <Toggle onChange={handleToggleChange}/>
        </div>
    );
}

function Toggle({ onChange }) {
    const [ isOn, setIsOn ] = useState(false);

    function updateToggle(nextIsOn) {
        onChange(nextIsOn); // Notify parent component about the change
        setIsOn(nextIsOn);
    }

    function handleClick() {
        updateToggle(!isOn);
    }

    console.log("Toggle.tsx isOn", isOn)

    return (
        <div
            style={{
                width: '100px',
                height: '50px',
                backgroundColor: isOn ? 'green' : 'red',
                cursor: 'pointer'
            }}
            onClick={handleClick}
        >
            Toggle
        </div>
    );
}
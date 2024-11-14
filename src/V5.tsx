import { useStore } from "./store.ts";
import React, { useRef } from "react";

function Name() {
    const name = useStore((state => state.user.name));
    const renderCount = useRef(0);
    renderCount.current += 1;
    return (
        <div className="grid border p-4">
            <div>Render count: {renderCount.current}</div>
            Name:{name}
        </div>
    )
}

function Count() {
    const count = useStore((state => state.count));
    const renderCount = useRef(0);
    renderCount.current += 1;
    return (
        <div className="grid border p-4">
            <div>Render count: {renderCount.current}</div>
            Count:{count}
        </div>
    )
}


function InputName() {
    const changeName = useStore((state => state.changeName));
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div className="grid border p-4">
            <div>Render count: {renderCount.current}</div>
            <input type="text" placeholder="enter name" onChange={e => changeName(e.target.value)}/>
        </div>
    )
}

function ButtonIncreaseCount() {
    const increaseCount  =useStore((state => state.increaseCount));
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div className="grid border p-4">
            <button onClick={increaseCount}>Increase</button>
            <div>Render count: {renderCount.current}</div>
        </div>
    )
}

function RemoveCount() {
    const removeCount= useStore((state => state.removeCount));
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div className="grid border p-4">
            <button onClick={removeCount}>removeCount</button>
            <div>Render count: {renderCount.current}</div>
        </div>
    )
}

export default function V5() {


    return (
        <div className="grid content-baseline border border-purple-700 p-4">
            V5
            <Name/>
            <Count/>
            <InputName/>
            <ButtonIncreaseCount/>
            <RemoveCount/>
        </div>
    )

}
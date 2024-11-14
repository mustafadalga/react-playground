import { useStore, useStoreSelector } from "./store.ts";
import React, { memo, useRef } from "react";

function Name() {
    const name=useStore(state => state.user.name)
    const renderCount = useRef(0);
    renderCount.current += 1;
    console.log(2222)
    return (
        <div className="grid border p-4">
            <div>Render count: {renderCount.current}</div>
            Name:{name}
        </div>
    )
}

const MemoName=memo(Name)

function Address() {
    const address = useStore(state => state.user.address)
    const renderCount = useRef(0);
    renderCount.current += 1;
    return (
        <div className="grid border p-4">
            <div>Render count: {renderCount.current}</div>
            address: <pre>{JSON.stringify(address)}</pre>
        </div>
    )
}

function AddressCity() {
    const city = useStore(state => state.user.address.city)
    const renderCount = useRef(0);
    renderCount.current += 1;
    return (
        <div className="grid border p-4">
            <div>Render count: {renderCount.current}</div>
            City: <pre>{JSON.stringify(city)}</pre>
        </div>
    )
}

function Count() {
    const count = useStoreSelector("count")
    const renderCount = useRef(0);
    renderCount.current += 1;
    return (
        <div className="grid border p-4">
            <div>Render count: {renderCount.current}</div>
            Count:{count}
            <MemoName/>

        </div>
    )
}


function InputAddress() {
    const changeAddress = useStoreSelector("changeAddress")
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div className="grid border p-4">
            <div>Render count: {renderCount.current}</div>
            <input type="text" placeholder="enter addresss" onChange={e => changeAddress(e.target.value)}/>
        </div>
    )
}

function ButtonIncreaseCount() {
    const increaseCount  =useStoreSelector("increaseCount")
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
    const removeCount= useStoreSelector("removeCount")
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div className="grid border p-4">
            <button onClick={removeCount}>removeCount</button>
            <div>Render count: {renderCount.current}</div>
        </div>
    )
}

export default function V6() {
    return (
        <div className="grid content-baseline border border-purple-700 p-4">
            <Name/>
            <Address/>
            <AddressCity/>
            <Count/>
            <InputAddress/>
            <ButtonIncreaseCount/>
            <RemoveCount/>
        </div>
    )

}

import React from 'react';
import { useSelector } from 'react-redux';

export default function CounterView() {
    const value = useSelector(state => state.value);
    return <h1>Counter: {value}</h1>;
}

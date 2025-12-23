// DecrementButton.js
import React from 'react';
import { store } from 'src/study/redux/redux/store.ts';

export default function DecrementButton() {
    return (
        <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>
            Decrement
        </button>
    );
}

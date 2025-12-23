// App.js
import React from 'react';
import CounterView from 'src/study/redux/redux/Counter.tsx';
import IncrementButton from 'src/study/redux/redux/Increment.tsx';
import DecrementButton from 'src/study/redux/redux/Decrement.tsx';

export default function Application() {
    return (
        <div>
            <CounterView />
            <IncrementButton />
            <DecrementButton />
        </div>
    );
}

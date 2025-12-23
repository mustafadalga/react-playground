// CounterView.js
import React from 'react';
import { store } from 'src/study/redux/redux/store.ts';

export default function CounterView() {
    const [value, setValue] = React.useState(store.getState().value);

    React.useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setValue(store.getState().value);
        });
        return () => unsubscribe();
    }, []);

    return <h1>Counter: {value}</h1>;
}

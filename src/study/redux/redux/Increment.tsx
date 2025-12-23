import { store } from 'src/study/redux/redux/store.ts';

export default function IncrementButton() {
    return (
        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>
            Increment
        </button>
    );
}

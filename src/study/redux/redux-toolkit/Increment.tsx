import { useDispatch } from 'react-redux';
import { incremented } from 'src/study/redux/redux-toolkit/store.ts';

export default function IncrementButton() {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(incremented())}>Increment</button>;
}

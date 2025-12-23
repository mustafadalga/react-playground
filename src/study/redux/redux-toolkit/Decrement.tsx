import { useDispatch } from 'react-redux';
import { decremented } from 'src/study/redux/redux-toolkit/store.ts';

export default function DecrementButton() {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(decremented())}>Decrement</button>;
}

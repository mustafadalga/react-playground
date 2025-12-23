import { Provider } from 'react-redux';
import { store } from 'src/study/redux/redux-toolkit/store.ts';
import CounterView from 'src/study/redux/redux-toolkit/Counter.tsx';
import IncrementButton from 'src/study/redux/redux-toolkit/Increment.tsx';
import DecrementButton from 'src/study/redux/redux-toolkit/Decrement.tsx';

export default function Application() {
    return (
        <Provider store={store}>
            <CounterView />
            <IncrementButton />
            <DecrementButton />
        </Provider>
    );
}

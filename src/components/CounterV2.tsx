import { useCounterV2 } from "@/store/useCounterV2";

export default function CounterV2() {
    const { count, dispatch } = useCounterV2();
    return (
        <section className="border border-gray-700 gap-5">
            <h1>{count}</h1>
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
        </section>
    );
}
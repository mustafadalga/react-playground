import { useCountStoreV1 } from "@/store/useCounterV1";

const Count = () => {
    const { count } = useCountStoreV1();
    return <h1>{count}</h1>
};

const Increment = () => {
    const { increment } = useCountStoreV1();
    return <button onClick={increment}>increment</button>
};

const Decrement = () => {
    const { decrement } = useCountStoreV1();
    return <button onClick={decrement}>decrement</button>
};

const FetchCount = () => {
    const { fetch } = useCountStoreV1();
    return <button onClick={fetch}>decrement</button>
};


export default function CounterV1(){
    return (
        <section className="border border-gray-700 gap-5">
            <Count/>
            <Increment/>
            <Decrement/>
            <FetchCount/>
        </section>
    )
}
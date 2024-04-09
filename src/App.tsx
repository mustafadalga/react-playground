import CounterV1 from "@/components/CounterV1.tsx";
import CounterV2 from "@/components/CounterV2.tsx";
import Common from "@/components/Common.tsx";


function App() {
    return (
        <main className="grid gap-5 p-10">
            <CounterV1/>
            <CounterV2/>
            <Common/>
        </main>
    )
}

export default App

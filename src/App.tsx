import TodosContainer from "@/components/TodosContainer.tsx";
import OnlineStatus from "@/components/OnlineStatus.tsx";
import ScrollY from "@/components/ScrollY.tsx";


function App() {
    return (
        <main className="grid gap-5 p-10">
            <OnlineStatus/>
            <TodosContainer/>
            <ScrollY/>
        </main>
    )
}

export default App

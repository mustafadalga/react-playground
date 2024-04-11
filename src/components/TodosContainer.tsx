import TodosApp from "@/components/Todos.tsx";
import TodoList from "@/components/TodoList.tsx";

export default function TodosContainer() {
    return (
        <div>
            <TodosApp/>
            <TodoList/>
        </div>
    )
}
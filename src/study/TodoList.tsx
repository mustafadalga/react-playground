import { FormEvent, useState } from "react";

interface Todo {
    value: string,
    id: number
}

export default function TodoList() {
    const [ todos, setTodos ] = useState<Todo[]>([])
    const [ newTask, setNewTask ] = useState<string>("")
    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setTodos(prevState => [ ...prevState, { value: newTask, id: Date.now() } ])
        setNewTask("")
    }
    const onDelete = (id: number) => {
        setTodos(prevState => prevState.filter(todo => todo.id != id))
    }
    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={newTask} onChange={event => {
                    setNewTask(event.target.value)
                }} placeholder="Add your task"/>
                <div>
                    <button disabled={!newTask.length} type="submit">Submit</button>
                </div>
            </form>
            <ul>
                {todos.map(todo => <li key={todo.id}>
                    <span>{todo.value}</span>
                    <button onClick={()=>onDelete(todo.id)}>Delete</button>
                </li>)}
            </ul>
        </div>
    );
};
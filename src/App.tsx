import {  useMemo, useState } from "react";
import PropStateAdjuster from "@/components/PropStateAdjuster.tsx";
import RiskyUpdateComponent from "@/components/RiskyUpdateComponent.tsx";


function getFilteredTodos(todos, filter) {
    for (let i = 0; i < 1000000; i++) {

    }
    switch (filter) {
        case 'completed':
            return todos.filter(todo => todo.completed);
        case 'active':
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

function TodoList({ todos, filter,setTodo }) {
    const [newTodo, setNewTodo] = useState('');

    console.time('2filter array');

    const visibleTodos = useMemo(() => {
        const x =getFilteredTodos(todos, filter);
        return x
    }, [todos, filter]);
    console.timeEnd('3filter array');


    const addTodo = () => {
        setTodo({ text: newTodo, completed: false });
        setNewTodo(''); // Reset input
    };

    return (
        <div>
            <input
                className="border border-gray-300 rounded-md p-2 mb-2"
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {visibleTodos.map((todo, index) => (
                    <li key={todo.text}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default function App(){
    // const [todos,setTodos]=useState([
    //     { text: 'Learn React', completed: false },
    //     { text: 'Read documentation', completed: true },
    //     { text: 'Build a React app', completed: false }
    // ])
    // const setTodo=(todo)=>{
    //     setTodos(prevState => [...prevState, todo])
    // }

    return (
        <div>
            {/*<RiskyUpdateComponent/>*/}
            <PropStateAdjuster/>
        </div>
    )
}



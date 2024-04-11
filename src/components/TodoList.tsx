import { useSyncExternalStore } from 'react';
import { todosStore } from '@/store/todoStore';

export default function TodoList() {
    const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}
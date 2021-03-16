import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert'
import TodoList from './TodoList'
import './TodoApp.css'
const TodoApp = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'Learn Javascript',
            checked: true
        },
        {
            id: 2,
            text: 'Learn React',
            checked: true
        },
        {
            id: 3,
            text: 'Make a Todo-App',
            checked: true
        },
        {
            id: 4,
            text: 'Learn Typescript',
            checked: false
        }

    ]);

    const nextId = useRef(5);
    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false
            };
            setTodos(todos => todos.concat(todo));
            nextId.current += 1;
        },
        [todos]
    )

    const onRemove = useCallback(
        id => {
            setTodos(todos => todos.filter(todo => todo.id !== id))
        },
        [todos]
    );

    const onToggle = useCallback(
        id => {
            setTodos(todos =>
                todos.map(todo =>
                    todo.id === id ? {...todo, checked: !todo.checked} : todo)
            )
        },
        [todos]
    )
    return(
        <div className="todo-app-container">
            <TodoTemplate>
                <TodoInsert onInsert={onInsert} />
                <TodoList 
                    todos={todos} 
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            </TodoTemplate>
        </div>
        
    )
    
}

export default TodoApp;
import React from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert'

const TodoApp = () => {
    return(
        <TodoTemplate>
            <TodoInsert />
        </TodoTemplate>
    )
    
}

export default TodoApp;
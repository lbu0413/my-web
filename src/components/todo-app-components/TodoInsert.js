import React from 'react';
import { MdAdd } from 'react-icons/md'
import './TodoInsert.css';

const TodoInsert = () => {
    return(
        <form className="TodoInsert">
            <input placeholder="Add todo" />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert;
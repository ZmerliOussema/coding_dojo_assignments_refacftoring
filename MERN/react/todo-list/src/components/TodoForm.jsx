import React from 'react';
import { useState } from 'react';

const TodoForm = (props) => {
    const {todoList, setTodoList} = props
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const submitTodo = (e) => {
        e.preventDefault();

        setTodoList([...todoList, input]);

        setInput('');
    }
    return (
        <div>
            <form onSubmit={submitTodo}>
                <input type="text" onChange={handleInput} value={input}/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoForm;

import React from 'react'
import { useState } from 'react';
import { elements } from './TodoData';
const TodoInput = () => {
    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task)
        addToDatabase(task, elements.length + 1);
        setTask('');

    }
    const addToDatabase = (task, id) => {
        fetch('http://localhost:8000/todo/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                task: task,
                isDone: false
            })

        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <input type="text" placeholder="Add a task" 
            value={task}
            onChange={handleChange}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    handleSubmit(e);
            }}}             
            />
            <button
            onClick={handleSubmit}
            >Add</button>
        </div>
    )
}

export default TodoInput
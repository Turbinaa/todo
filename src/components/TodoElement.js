import React from 'react';
import './css/todo.css';
import { useState } from 'react';

const TodoElement = ({task, isDone}) => {
    const [isDoneState, setIsDoneState] = useState(isDone);
    // Handle checkbox change
    const handleChange = (e) => {
        console.log(e.target.checked)
        // update state
        setIsDoneState(e.target.checked);

    }
    return (
        <li>
            <div className="todoElement">
                {isDoneState ? <input type="checkbox" onChange={handleChange} defaultChecked></input> :
                <input type="checkbox" onChange={handleChange}></input>}
                <span className={isDoneState ? "task-done" : "task-notdone"}>{task}</span>
            </div>
        </li>
    )
}

export default TodoElement
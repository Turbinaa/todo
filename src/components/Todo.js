import React from 'react';
import './css/todo.css';
import TodoElement from './TodoElement';
import { elements } from './TodoData';
import TodoInput from './TodoInput';

const Todo = () => {
  return (
    <div className="todoApp">
      <h1>Todo</h1>
      <TodoInput></TodoInput>
      <ul>
      {elements.sort((a, b) => a.id - b.id).map((item, index) => {
        if (index === item.id){
          return (<TodoElement task={item.task} isDone={item.isDone} key={index}/>);
        }else{
          console.log(index)
          return null;

        }
      })}
      </ul>
    </div>
  )
}

export default Todo
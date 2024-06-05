import React from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className={`todo ${todo.isCompleted ? 'complete' : ''}`}>
      <div className={'container'}>
        {todo.file ? <img className="image" src={URL.createObjectURL(todo.file)} alt="todo" /> : <div className='image'></div>}
        {todo.isCompleted ? '✅' : '❌'} &nbsp; {todo.text}
      </div>
        <button className="button" onClick={() => completeTodo(index)}>
          {todo.isCompleted ? 'Undo' : 'Complete'}
        </button>
        <button className="button" onClick={() => removeTodo(index)}>Delete</button>
    </div>
  );
}

export default Todo;

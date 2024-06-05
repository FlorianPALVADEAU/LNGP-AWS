import React from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className={`todo ${todo.isCompleted ? 'complete' : ''}`}>
      {todo.isCompleted ? '✅' : '❌'} &nbsp; {todo.text}
      {todo.file && <img src={URL.createObjectURL(todo.file)} alt="todo" />}
      <div>
        <button className="button" onClick={() => completeTodo(index)}>
          {todo.isCompleted ? 'Undo' : 'Complete'}
        </button>
        <button className="button" onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;

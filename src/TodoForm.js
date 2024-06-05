import React, { useRef, useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const [file, setFile] = useState(null);
  const fileInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({text: value,file: file});
    setValue('');
    setFile(null);
    fileInputRef.current.value = '';
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="form" name='form'>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task"
        required
        name='text'
      />
      <input
        name='file'
        type="file"
        className="file-input"
        onChange={handleFileChange}
        accept='.jpg, .jpeg, .png, .gif, .svg, .webp'
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <button className="button" onClick={() => fileInputRef.current.click()} style={{ border: "0", padding: "0" }}>Add a photo</button>
      <button type="submit" className="button" style={{ border: "0", padding: "0" }}>Add Task</button>
    </form>
  );
}

export default TodoForm;

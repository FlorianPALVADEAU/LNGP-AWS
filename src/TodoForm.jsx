import React, { useRef, useState } from 'react';
import { TextField } from '@radix-ui/themes';
import { ImagePlug } from './Icons';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const [file, setFile] = useState(null);
  const fileInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({ text: value, file: file });
    setValue('');
    setFile(null);
    fileInputRef.current.value = '';
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className='flex justify-center gap-2 px-4 w-full' name='form'>
      <TextField.Root
        className='w-full'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Add a new task'
        required
        name='text'
      />
      <input
        type='file'
        className="hidden"
        onChange={handleFileChange}
        accept='.jpg, .jpeg, .png, .gif, .svg, .webp'
        ref={fileInputRef}
        name='file'
      />
      <div className='flex gap-1'>
        <button onClick={() => fileInputRef.current.click()} className='flex items-center justify-center px-2 whitespace-nowrap bg-blue-500 rounded text-white'>
          <ImagePlug />
        </button>
        <button type='submit' className='flex items-center justify-center px-2 whitespace-nowrap bg-blue-500 rounded text-white'>New Task</button>
      </div>
    </form>
  );
}

export default TodoForm;

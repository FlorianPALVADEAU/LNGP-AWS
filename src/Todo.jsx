import React from 'react';
import './App.css';
import { Avatar, Text } from '@radix-ui/themes';
import clsx from 'clsx';
import { Trash } from './Icons';

export default function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className='flex items-center justify-between p-2 gap-2 rounded border border-solid w-full'
      onClick={() => completeTodo(index)}
    >
      <div className='flex items-center justify-start gap-2'>
        <input
          type='checkbox'
          checked={todo.isCompleted}
          onChange={() => completeTodo(index)}
        />
        <Text
          as='p'
          className={clsx(
            todo.isCompleted && 'line-through',
            'line-clamp-1 max-w-72'
          )}
        >
          {todo.text}
        </Text>
      </div>
      <div className='flex items-center gap-2'>
      {todo.file ? (
        <Avatar size='1' src={URL.createObjectURL(todo.file)} />
      ) : (
        <Avatar size='1' fallback={index + 1} />
      )}
      <div onClick={() => removeTodo && removeTodo(index)} className="flex items-center justify-center rounded text-red-500 hover:bg-red-100 w-6 aspect-square">
        <Trash />
      </div>
      </div>
    </div>
  );
}

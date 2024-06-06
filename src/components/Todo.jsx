import React from 'react';
import clsx from 'clsx';
import { Avatar, Text } from '@radix-ui/themes';
import { Trash } from './Icons';

export default function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className='flex items-center gap-2 w-full'>
      <div>
        {todo.file ? (
          <Avatar size='1' src={URL.createObjectURL(todo.file)} />
        ) : (
          <Avatar size='1' fallback={index + 1} />
        )}
      </div>
      <div
        className='flex items-center justify-between p-2 gap-2 w-full rounded border border-solid '
        onClick={() => completeTodo(index)}
      >
        <div className='flex items-center justify-start gap-2 '>
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
          <div
            onClick={() => removeTodo && removeTodo(index)}
            className='flex items-center justify-center rounded text-red-500 hover:bg-red-100 w-6 aspect-square'
          >
            <Trash />
          </div>
        </div>
      </div>
    </div>
  );
}

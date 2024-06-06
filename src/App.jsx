import React, { useState, useEffect } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import { Heading, Text } from '@radix-ui/themes';
import Log from './components/Log';
import useAwsInteractions from './helpers/useAwsInteractions.hook';

function App() {
  const [users, setUsers] = useState(null);
  const [todos, setTodos] = useState([]);
  const { getUser } = useAwsInteractions();

  useEffect(() => {
    const fetchData = async () => {
        const user = await getUser('1');
        console.log(user);
        setTodos(user.todos);
        setUsers(user);
    };
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTodo = (text) => {
    const newTodos = [...todos, { ...text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    const todo = newTodos[index];
    setTodos(newTodos.filter((t) => t !== todo));
  };

  return (
    <div className='w-screen max-w-screen-2xl mx-auto h-screen p-4 flex justify-center relative'>
      <Log />
      <div className='w-96 flex flex-col items-center gap-8'>
        <div className='w-full flex items-center justify-between gap-4'>
          <div className='flex flex-col'>
            <Heading size={'6'}>ToDo Done</Heading>
            <Text as='p' className='text-gray-500'>
              Keep it up, {users?.name || 'User'}
            </Text>
          </div>
          <div className='bg-blue-500 rounded-full aspect-square flex items-center justify-center w-24 text-white text-2xl gap-1'>
            <p className='font-semibold'>
              {todos.filter((todo) => todo.isCompleted).length}
            </p>
            <p>/</p>
            <p>{todos.length} </p>
          </div>
        </div>
        <TodoForm addTodo={addTodo} />
        <div className='flex flex-col gap-4 w-full'>
          {todos.length === 0 && <p>No todos yet!</p>}
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

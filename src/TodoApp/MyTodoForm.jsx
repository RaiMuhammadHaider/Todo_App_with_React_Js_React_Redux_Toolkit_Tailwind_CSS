// src/components/AddTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTODO } from './MyTodoSlice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTODO(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo..."
        className="flex-1 px-3 py-2 border rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;

// src/components/TodoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTodo, removeTodo, toggle } from './MyTodoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState('');

  return (
    <div className="space-y-3 transition-all duration-300">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="group flex items-center justify-between gap-4 px-4 py-3 rounded-lg shadow-md bg-white hover:shadow-lg transition-all"
        >
          {/* Left Section */}
          <div className="flex items-center gap-3 flex-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggle({ id: todo.id }))}
              className="w-5 h-5 accent-green-500 hover:scale-110 transition-transform"
            />

            {editId === todo.id ? (
              <input
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="flex-1 px-2 py-1 border-b border-blue-400 focus:outline-none focus:border-blue-600 text-gray-800 text-base bg-transparent"
                autoFocus
                placeholder="Update task..."
              />
            ) : (
              <span
                className={`text-base flex-1 ${
                  todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
                }`}
              >
                {todo.completed ? '✅' : '📝'} {todo.text}
              </span>
            )}
          </div>

          {/* Right Section */}
          <div className="flex gap-2 items-center">
            {editId === todo.id ? (
              <button
                onClick={() => {
                  dispatch(editTodo({ id: todo.id, newText }));
                  setEditId(null);
                  setNewText('');
                }}
                title="Save"
                className="text-blue-600 hover:text-blue-800 text-lg transition"
              >
                💾
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditId(todo.id);
                  setNewText(todo.text);
                }}
                title="Edit"
                className="text-yellow-500 hover:text-yellow-600 text-lg transition"
              >
                ✏️
              </button>
            )}

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              title="Delete"
              className="text-red-500 hover:text-red-700 text-lg transition"
            >
              ❌
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

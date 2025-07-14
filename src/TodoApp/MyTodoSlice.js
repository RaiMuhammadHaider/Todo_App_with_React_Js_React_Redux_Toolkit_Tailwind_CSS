// src/Final/MyTodoSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const myInitialState = {
  todos: [{ id: 1, text: "Hello world", completed: false }]
};

export const MyTodoSlice = createSlice({
  name: 'todo',
  initialState: myInitialState,
  reducers: {
    addTODO: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoToEdit = state.todos.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = newText;
      }
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((e) => e.id !== action.payload);
    },
  },
});

export const { addTODO, removeTodo, editTodo, toggle } = MyTodoSlice.actions;
export default MyTodoSlice.reducer;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import MyTodoItems from './Final/MyTodoItems'
// import MyTodoForm from './Final/MyTodoForm'
// import AddTodo from './Final/MyTodoForm'
import AddTodo from '../src/TodoApp/MyTodoForm'
// import TodoList from './Final/MyTodoItems'
import TodoList from '../src/TodoApp/MyTodoItems'

// import Redux from './components/Redux-toolkit'
function App() {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">📝 Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App

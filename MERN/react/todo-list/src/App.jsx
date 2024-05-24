import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoDisplay from './components/TodoDisplay'

function App() {
  const [todoList, setTodoList] = useState([])

  return (
    <>
      <TodoForm todoList={todoList} setTodoList={setTodoList}/>
      <TodoDisplay todoList={todoList}/>
    </>
  )
}

export default App

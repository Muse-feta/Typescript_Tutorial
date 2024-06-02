import React, { useState } from 'react'
import Input from './components/Input'
import { Todo } from './model'
import TodoList from './components/TodoList'

const App:React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo){
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false}]);
      setTodo('')
    }
  }
  console.log(todo)
  console.log(todos)
  return (
    <div className=' bg-blue-600 text-white text-4xl text-center m-9'>
    Taskify
    <Input todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
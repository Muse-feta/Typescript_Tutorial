import React from 'react'
import { Todo } from '../model';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

type props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  key: number;
};

const SingleTodo = ({todo, todos, setTodos, key}: props) => {

    const handleDone = (id:number) => {
        setTodos(todos.map((data) => (
            data.id === id ? {...data, isDone: !data.isDone} : data
        )))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((data) => (
            data.id !== id
        )))
    }
  return (
    <div className=" ">
      <ul className=" flex justify-center items-center bg-yellow-600 py-5 my-2">
        {todo.isDone === false ? (
          <li className=" mr-11">{todo.todo}</li>
        ) : (
          <s className=" mr-11">{todo.todo}</s>
        )}
        <li className="bg-yellow-600">
          <CiEdit />
        </li>
        <li className="cursor-pointer" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </li>
        <li className=" cursor-pointer" onClick={() => handleDone(todo.id)}>
          <IoMdDoneAll />
        </li>
      </ul>
    </div>
  );
}

export default SingleTodo
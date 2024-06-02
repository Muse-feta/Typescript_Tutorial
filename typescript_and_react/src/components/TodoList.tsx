import React from "react";
import { Todo } from "../model";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: props) => {
  return <div>
    <ul>
      {todos.map((todos) => (
        <li>{todos.todo}</li>
      ))}
    </ul>
  </div>;
};

export default TodoList;

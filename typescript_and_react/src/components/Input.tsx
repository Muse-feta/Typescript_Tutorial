import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit:  (e:React.FormEvent) => void 
}

const Input = ({ todo, setTodo, handleSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(e) => {
      handleSubmit(e);
      inputRef.current?.blur()
    }}
    
    >
      <input
    ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className=" px-10 py-3 rounded-3xl m-6 text-black bg-white focus:bg-slate-600"
        type="text"
        placeholder="Enter a Task"
      />
      <button className=" bg-white text-black rounded-2xl p-3">Go</button>
    </form>
  );
};

export default Input;

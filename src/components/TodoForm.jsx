import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  function submitTodo(e) {
    e.preventDefault();
    if(todo) dispatch(addTodo(todo));
    setTodo("");
  }
  

  return (
    <div className="flex align-middle justify-center p-3 text-xl mt-4" >
      <form onSubmit={submitTodo}>
        <input
          type="text"
          className="border-2 mr-4 p-1"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit" className="border-2 p-1 ml-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

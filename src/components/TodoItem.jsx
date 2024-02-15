import React from "react";
import { removeTodo, editTodo ,checkedTodo} from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [todoMsg, setTodoMsg] = useState(todo.text);
  const [isEditable, setIsEditable] = useState(false);

  function toggleComplete(){
   dispatch(checkedTodo(todo.id));
  }


  return (
    <div className={`flex align-middle justify-center p-2 mb-2 border-red-50 border-2 ${todo.completed?"line-through bg-slate-500": ""}`}>
      {/* Checkbox */}
      <input
      className="cursor-pointer	"
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
      />

      {/* Todo Text */}
      <input
        id="input"
        value={todoMsg}
        className={`text-center mt-2 border-2 ml-3 mr-3 outline-none w-full bg-transparent rounded-lg text-lg ${
          isEditable ? "border-black-2" : "border-transparent"
        }`}
        readOnly={!isEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />

      {/* Edit Btn */}
      <button
        className="p-2 border-2 m-3"
        onClick={(e) => {
          if (isEditable) {
            dispatch(editTodo({ id: todo.id, msg: todoMsg }));
            setIsEditable(false);
          } else {
            setIsEditable(true);
          }
        }}
      >
        {isEditable ? "Save" : "Edit"}
      </button>

      {/* Delete btn */}
      <button
        className="p-2 border-2 m-3"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;

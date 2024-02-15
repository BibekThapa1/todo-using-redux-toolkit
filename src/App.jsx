import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/todoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, addTodoOfLocalStorage } from "./features/todo/todoSlice";

function App() {
  const dispatch = useDispatch();

  let todos = useSelector((state) => state.todos);

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"));
    if (todo && todo.length > 0) {
      dispatch(addTodoOfLocalStorage(todo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  console.log(todos);

  return (
    <>
      <div
        className="m-0 min-w-full min-h-full  flex flex-col	align-middle justify-center"
      >
        <TodoForm />
        <div className="m-4">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

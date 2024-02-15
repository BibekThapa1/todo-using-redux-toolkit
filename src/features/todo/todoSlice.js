import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoOfLocalStorage: (state, action) => {
      state.todos.unshift(...action.payload);
    },
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      console.log(state.todos);
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id == action.payload.id
          ? { ...todo, text: action.payload.msg }
          : todo
      );
    },
    checkedTodo:(state,action)=>{
      state.todos = state.todos.map((todo)=> todo.id == action.payload ? {...todo,completed:!todo.completed}: todo)
    }
  },
});

export const { removeTodo, addTodo, editTodo, addTodoOfLocalStorage ,checkedTodo} =
  todoSlice.actions;

export default todoSlice.reducer;

import React from 'react'
import {removeTodo}  from '../features/todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const TodoItem = () => {
  const todos = useSelector((state)=>state.todos)
  const dispatch = useDispatch();
  
  return (
    <div className='flex flex-col'>
        {todos.map((todo)=>(
        <li key={todo.id}
        className='flex justify-between align-middle m-2 border-2 p-3'
        > 
            <input type="checkbox" 
              checked={todo.checked}
            //   onClick={}
            />
           <div className='text-center mt-2'>{todo.text}</div>
           <button
           className='p-2 border-2'
           onClick={()=> dispatch(removeTodo(todo.id))}>X</button>
        </li>
        ))}
    </div>
  )
}

export default TodoItem
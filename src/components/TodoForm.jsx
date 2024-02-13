import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import  {addTodo}  from '../features/todo/todoSlice';

const TodoForm = () => {
    
   const [todo , setTodo] = useState("");
   const dispatch = useDispatch()
    
   function submitTodo(e){
    console.log("entered in submit f")
   e.preventDefault();

   dispatch(addTodo(todo))

   console.log("outed in submit f")
   setTodo("");
   }

  return (
    <div>
        <form onSubmit={submitTodo}>
            <input
             type="text" 
            className='border-2 mr-4 p-1'
            value={todo}
            onChange={(e)=> setTodo(e.target.value)}
            />

            <button type="submit" className='border-2 p-1'>Submit</button>
        </form>
    </div>
  )
}

export default TodoForm
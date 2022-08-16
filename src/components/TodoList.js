import React, { useState } from 'react'
import {todo} from './Todo'


const TodoList = () => {
  const [todoleast, setTodoleast] = useState(todo);
  const [cleartodo, setCleartodo] = useState(false);
  const [isDone, setIsDone]= useState(false);
   const clicktoggle = () => {
          setCleartodo( prev => prev =  true)
   }

    const lineTrough = () => {
       setIsDone(prev => !prev);
    }
   return ( 
    <div>
     <div className='Header'>
     <h1>MYTODOS</h1>
     <button onClick={clicktoggle}>Clear  all</button>
     </div>
     <div>
          {todoleast.map((index) => (
           <li  onClick={lineTrough} className={ cleartodo ? "strike" : "" || isDone ? "line" : "" } key={index.id}>
           {index.todo}
           </li>
          ))}
     </div> 

    </div>
  )
}

export default TodoList

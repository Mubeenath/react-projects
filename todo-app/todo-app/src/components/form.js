import React, { useState } from 'react';

function Form({getData}) {
    const [listTodo, setListtodo] = useState([]);
    const [todos, setTodos] = useState("")

   

    const onSub = (e) => {
         e.preventDefault();
         setTodos(listTodo);
         setTodos('')
        
        
        //   console.log(todos)
        console.log(listTodo)
    }


    
    
  return (
    <div>
     
      <form onSubmit={onSub}>
            <input
            type="text"
             placeholder="write your plan" 
             
             value={todos} 
             onChange={(e) =>{setTodos(e.target.value) }}
             required
                     />
            <button type="submit" onClick={() => setListtodo([...listTodo, todos])}>Add</button>
            </form>

          
    {listTodo.map((value) => {
     
        return(
            <div>
      <ul><li>
      <h3>{value}
     </h3>
      </li></ul>
    </div>
        )
    })}
      
    </div>
  )
}

export default Form

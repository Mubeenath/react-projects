import React, { useState } from 'react'

function IntrouseState() {
    const [count, setCount] = useState(0);
    const addCount = () =>{
        setCount(count +1)

    };
  return (
    <div>
         <h2>let the count be {count}</h2>
        <button onClick={addCount}>add count</button>

      
    </div>
  )
}

export default IntrouseState

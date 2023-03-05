import React, { useEffect, useState } from 'react'

function EffectHook() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(() =>{
        console.log('sideeffect')

} ,[])
  return (
    <div>
          <h2>let the count be {count1}</h2>
        <button onClick={() =>setCount1(count1 +1) }>add count</button>

        <h2>let the count be {count2}</h2>
        <button onClick={() => setCount2(count2 + 1)}>add count</button>
        
      
    </div>
  )
}

export default EffectHook

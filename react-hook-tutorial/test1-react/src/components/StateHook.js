import React from 'react'

function StateHook() {
    let count = 0;
    const addCount = () => {
        count = count + 1
        console.log(count)
    };
  return (
    <div>
        <h2>let the count be {count}</h2>
        <button onClick={addCount}>add count</button>

      
    </div>
  );
}

export default StateHook

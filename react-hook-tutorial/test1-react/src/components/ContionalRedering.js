import React from 'react'

function ContionalRedering() {
    let number = 0;
  return (
    <div>
        {number > 0 ? (<h1>positive</h1>) : number < 0 ? (<h1>negative</h1>) :<h1>zero</h1>}
      
    </div>
  )
}

export default ContionalRedering

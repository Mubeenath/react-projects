import React from 'react'



function Output({passData}) {
   
    // console.log(passData);
  return (
    <div>
      <ul>
      <li>
                <div >
                    <h3>{passData}
                    <button>Delete</button></h3>
                </div>
            </li>
      </ul>
    </div>
  )
}

export default Output

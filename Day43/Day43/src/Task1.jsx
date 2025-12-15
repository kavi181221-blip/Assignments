import React, { useState } from 'react'

function Task1() {
    const [count,setCount]=useState(0);
  return (
    <div>
    <h2>Count:{count}</h2>
    <button onClick={()=>setCount(pre=>pre+1)}>ADD 1</button>
        <button onClick={()=>setCount(pre=>pre-1)}>MINUS 1</button>
            <button onClick={()=>setCount(0)}>RESET</button>


    </div>
  )
}

export default Task1
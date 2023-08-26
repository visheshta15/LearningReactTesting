import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(0)
    const [file, setFile] = useState()


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <br />
        <input type="number" value={amount} onChange={(e)=> setAmount(parseInt(e.target.value))}/>
        <button onClick={()=>setCount(amount)}>Set</button>

        <div>
            <label htmlFor="file-uploader">upload file: </label>
            <input type="file" id='file-uploader' onChange={(e)=> console.log(e)}/>
        </div>
    </div>
  )
}

export default Counter
import React, { useState } from 'react'
// import axios from 'axios'

function GetReq() {
    const [data, setData] = useState([])
    const handleGetReq = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const resData = await res.json()
        console.log(resData)
        setData(resData)
    }

  return (
    <div>
        <h3>GetReq</h3>
        <button onClick={handleGetReq}>GET Request</button>
        {/* <ul>
            {data && data.map((ele) => <li key={ele.email}>{ele.name}</li>)}
        </ul> */}
        <h6>{data.name}</h6>
    </div>
  )
}

export default GetReq
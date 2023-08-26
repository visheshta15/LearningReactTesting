import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        // fetch("https://jsonplaceholder.jhkj/")
        .then((res)=> res.json())
        .then((data)=> setUsers(data.map((ele)=> ele.name)))
        .catch(() => setError("error while fetching users"))
    },[])
    console.log(users)
  return (
    <div>
       <h1>Users</h1>
       {error && <p>{error}</p>}
       <ul>
        {users && users.map((ele)=> <li>{ele}</li>)}
       </ul>
    </div>
  )
}

export default Users
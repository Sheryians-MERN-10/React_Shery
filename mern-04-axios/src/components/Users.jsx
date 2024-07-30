import React, { useEffect, useState } from 'react'

// import axios from 'axios'
import axios from "../utils/axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      const response = await axios.get('/users')
      console.log(response.data);

      setUsers(response.data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log("Component Mounted");
    getUser();

    return () => {
      console.log("Component Unmounted");
    }

  }, [])

  return (
    <div className='container '>
      <ul>
        {users.map((user) => {
          return <li key={user.id} className='list-user' >{user.name}</li>
        })}
      </ul>

    </div>
  )
}

export default Users
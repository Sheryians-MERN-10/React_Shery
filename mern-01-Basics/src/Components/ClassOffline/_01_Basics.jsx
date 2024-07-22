import React, { useState } from 'react'

const _01_Basics = () => {

  let x = <p className='text-2xl text-teal-500'>I am paragraph tag</p>

  // let username = "Ayush Kumar";
  let [username, setUsername] = useState("Ayush Kumar")

  function updateName() {
    // username = "Hare Krishna";
    setUsername("Hare Krishna Hare Krishna"); // async function
    console.log(username);  // sync function, isliye pehle run ho jaayega thats why show old value
  }
  console.log("BAHAR MEIN ISKI VALUE hai : " , username);  // sync function, isliye pehle run ho jaayega thats why show old value

  return (
    <>
      <hr className='my-5' />
      <h1> Username : {username} </h1>
      <button className='my-btn' onClick={updateName} >Update</button>
      {x}
    </>
  )
}

export default _01_Basics
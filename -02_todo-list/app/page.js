"use client";
import React, { useEffect, useState } from 'react'

const page = () => {
  const btn_submitUI = document.querySelector('#btn-submitUI');
  const btn_updateUI = document.querySelector('#btn-updateUI');

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);
  const [updateIndex, setUpdateIndex] = useState(null);


  const handleForm = (e) => {
    e.preventDefault();

    if (!title || !desc) return alert("⚠️ Please fill out all fields");

    setMainTask([...mainTask, { title, desc }]);
    setTitle('');
    setDesc('');

    // console.log(title)
    // console.log(desc)
    // console.log(mainTask)
  }

  const handleDelete = (i) => {
    // console.log(i)
    // console.log(e.target)
    // console.log(mainTask)

    // const updateList = [...mainTask];
    // updateList.splice(i, 1);
    // setMainTask(updateList);
    // console.log('deleted successfull')

    // ONE LINE SOLUTION
    setMainTask(mainTask.filter((_, index) => i !== index));
  }

  const handleEdit = (i) => {
    let taskToEdit = mainTask[i];
    setTitle(taskToEdit.title)
    setDesc(taskToEdit.desc)
    // console.log(taskToEdit);

    // console.log(mainTask[i]);

    setUpdateIndex(i);
    btn_submitUI.classList.add("hidden");
    btn_updateUI.classList.remove("hidden");
  }


  const handleUpdate = () => {
    console.log("Update Btn Working.");
    btn_submitUI.classList.remove("hidden");
    btn_updateUI.classList.add("hidden");

    // -------- manual lenthy method --------------------
    // let i = updateIndex;

    // let taskToUpdate = mainTask[i];
    // console.log(taskToUpdate)
    // updateTask = {
    //   title: `${title}`,
    //   desc: `${desc}`
    // }
    // mainTask.splice(i, 1, updateTask);
    // setMainTask([...mainTask]);
    // -------- manual lenthy method --------------------

    // ONE LINE CODE
    let updatedTask = { title, desc }
    setMainTask(mainTask.map((task, index) => index === updateIndex ? updatedTask : task));

    setTitle('');
    setDesc('');
    setUpdateIndex(null);
  }

  return (
    <>
      <div className='bg-blue-900 font-bold text-6xl text-center py-4 text-white ' >Todo List</div>
      <form onSubmit={handleForm} action="" className='bg-purple-400 h-[16rem] flex flex-col justify-start items-center pt-10 gap-4' >
        <input autoFocus value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className='border-zinc-500 w-[30rem] py-2 px-6 rounded-full text-xl' placeholder='Enter Task Title...' />
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} type="text" className='border-zinc-500 w-[30rem]  py-2 px-6 rounded text-xl ' placeholder='Taks Description... ' />
        <button id='btn-submitUI' type="submit" className='py-2 px-6 bg-blue-700 hover:bg-blue-800 duration-100 text-xl font-bold text-white rounded-lg' >Add Task</button>
        <button id='btn-updateUI' onClick={() => handleUpdate()} type="button" className='hidden py-2 px-6 bg-teal-400 hover:bg-teal-500 duration-100 text-xl font-bold text-black rounded-lg' >Update</button>
      </form>
      <div className='min-h-12 py-4 w-full text-white font-bold text-xl flex flex-col justify-center items-center' >


        {console.log(mainTask)}
        {(mainTask.length > 0) ?
          mainTask.map((e, index) => {
            return (
              <div key={index} id={'task' + index} className='w-4/5 duration-500  min-h-full bg-teal-800 flex items-center border-gray-500 border-b-[1px] text-wrap'>
                <div className='w-[28%] h-full py-2 pl-6  bg-teal-700' >{index + 1}. {e.title} </div>
                <div className='w-[4%] text-center' >:</div>
                <div className='w-[68%] h-full font-normal py-2 text-justify ' > {e.desc} </div>
                <button onClick={() => handleEdit(index)} type="button" className='py-1 px-8 mx-4 bg-green-600 hover:bg-green-700 rounded-full font-medium text-base ' >Edit</button>
                <button onClick={() => handleDelete(index)} type="button" className='py-1 px-6 mr-6 w-fit bg-red-600 hover:bg-red-700 rounded-full font-semibold text-base ' >Delete</button>
              </div>
            )
          }) : <h2 className='text-purple-800 text-2xl font-normal' >No Task Available !</h2>}

      </div>
    </>
  )
}

export default page
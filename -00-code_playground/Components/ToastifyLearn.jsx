"use client";
// Step 1: npm install --save react-toastify

import React from 'react';

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastifyLearn = () => {
    // const notify = () => toast("Wow so easy!");
    // const notify = () => toast.error("Wow so easy!");
    // const notify = () => toast.success("Wow so easy!");
    // const notify = () => toast.info("Wow so easy!");
    const notify = () => toast.warning("Wow so easy!");

    // const notify = () => {
    //     toast('🦄 Wow so easy!', {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         transition: Bounce,
    //     });
    // };

    return (
        <>
            <div>ToastifyLearn</div>
            <button onClick={notify} className='my-btn' >Notify!</button>
            <ToastContainer />
        </>
    )
}

export default ToastifyLearn
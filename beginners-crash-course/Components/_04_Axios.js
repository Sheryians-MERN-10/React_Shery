import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
    // const gallery = document.querySelector('#gallery');
    // console.log(gallery);

    const [Images, setImages] = useState([]);

    useEffect(() => {
        handleFetch();
    },[])
    

    const handleFetch = async () => {
        try {
            console.log("Image fetching ...");
            // const response = await axios.get('https://source.unsplash.com/random/200x200?nature');
            const response = await axios.get('https://picsum.photos/v2/list');
            const data = await response.data;
            console.log(data);

            // console.log(response);
            // console.log(response.data);

            // setImages(response.data);
            setImages(data);
            console.log(Images);
        }
        catch (err) {
            console.log("Error in Fetching Images: ", err);
        }
    }
    return (
        <>
            <div>_04_Axios</div>
            <div className='flex justify-center '>
                <button onClick={handleFetch} type="button" className=' bg-green-500 px-6 py-2 text-white text-2xl font-bold rounded-full'>Get Images</button>
            </div>
            <div id='gallery' className='flex w-4/5 mt-10 mx-auto justify-evenly min-h-[80vmax] gap-8 flex-wrap scroll-m-4' >
                {Images.map((elem, i) => {
                    return (
                        <img src={elem.download_url} className="w-[20vmax] h-[20vmax]"  alt="Not-Found" />
                        // <h1 key={i} >{elem.url}</h1>;
                        // <h1 key={i} >{elem.author}</h1>;
                        )
                })}
            </div>

        </>
    )
}
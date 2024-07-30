import React, { useContext, useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const UsernameForm = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const { users, setUsers } = useContext(UserContext);
    
    const [isError, setIsError] = useState(false);
    const myInpRef = useRef(null);

    const handleChangeInput = (e) => {
        // console.log(myInpRef);
        // console.log(myInpRef.current);
        // console.log(myInpRef.current.value);

        if (myInpRef.current.value.length > 4) {
            setIsError(false);
        } else {
            setIsError(true);
        }

        setUsername(e.target.value);
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to the display page with the username as a query parameter
        // navigate(`/display?username=${encodeURIComponent(username)}`);

        setUsers([...users, username]);
        setUsername('');
        navigate(`/display/${username}`);
    };

    return (
        <>
            <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
                <h1 className="text-xl font-bold mb-4">Submit Username</h1>
                <form onSubmit={handleSubmit} method='get' className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            ref={myInpRef}       // ⭐⭐⭐
                            type="text"
                            id="username"
                            value={username}
                            // onChange={(e) => setUsername(e.target.value)}
                            onChange={handleChangeInput}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                        {
                            isError && ( <small className='my-error'>Invalid User Name</small> )
                        }
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <Outlet />
        </>

    );
};

export default UsernameForm;

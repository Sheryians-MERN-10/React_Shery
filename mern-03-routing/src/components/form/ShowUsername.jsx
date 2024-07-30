import React, { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const DisplayPage = () => {
    const location = useLocation();
    const params = useParams();
    const username = params.username;
    // console.log(params.username);

    const { users, setUsers } = useContext(UserContext);
    console.log(users);
    return (
        <>
            <div className="max-w-md mx-auto p-4 bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-50 rounded-lg">
                {users.length > 0 ? (
                    <>
                        <h1 className="text-xl font-bold mb-4">Submitted Username</h1>
                        {users.map((user, i) => {
                            return (
                                <div key={i} className="p-2 border border-gray-200 rounded-md">
                                    <div >
                                        <p className="text-lg font-medium">Username:</p>
                                        <p className="text-lg">
                                            <span>{user}</span>
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                ) : (
                    <p className="text-lg">No username submitted.</p>
                )}
            </div>
        </>
    );
};

export default DisplayPage;

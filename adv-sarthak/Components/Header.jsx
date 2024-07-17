    import { MyContext } from '@/LearnContext/Context'; // Import the MyContext context from its file
    import React, { useContext } from 'react'; // Import necessary modules

    const Header = () => { // Define a component named Header
        // let user = useContext(MyContext); // Access the user value from the context using useContext hook

        // let [user, roll] = useContext(MyContext); // Use useContext hook to access the context and extract user and roll variables

        let { user, setUser } = useContext(MyContext); // Access both user and setUser from the context using destructuring

        return (
            <>
                <button className='my-btn' >{user}</button> {/* Render a button displaying the user value */}

                <button onClick={() => setUser('New Name- Rahul')} className='my-btn bg-orange-500' >Update- Username</button> {/* Render a button to update the user value */}
            </>
        )
    }

    export default Header; // Export the Header component as default

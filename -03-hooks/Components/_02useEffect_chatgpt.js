import React, { useState, useEffect } from 'react';

function MyComponent() {
    // State to store some data
    const [count, setCount] = useState(0);

    // Effect to update document title
    useEffect(() => {
        document.title = `Count: ${count}`;

        // Cleanup function to reset document title
        return () => {
            document.title = 'React App';
        };
    }, [count]); // Run effect whenever count changes

    // Effect to simulate data fetching (runs only on initial render)
    useEffect(() => {
        console.log('Fetching data...');

        // Simulating asynchronous data fetching
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Data fetched!');
        };

        fetchData();

        // No cleanup needed for this effect
    }, []); // Empty dependency array means it runs only once after initial render

    // Function to increment count
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button className='px-6 py-2 bg-blue-500 cursor-pointer m-6' onClick={incrementCount}>Increment</button>
        </div>
    );
}

export default MyComponent;

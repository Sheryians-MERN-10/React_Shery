"use client";
import React, { useState } from 'react';

function Counter() {
    // Declare a state variable named "count" initialized to 0
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            {/* Event handler to increment count */}
            <button type='button' className='bg-blue-600 px-6 py-2 text-white font-bold text-2xl my-6 mx-4' onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
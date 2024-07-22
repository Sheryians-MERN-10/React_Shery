import React, { useReducer } from "react";
import { initialState, reducer } from "./CounterReducer.js";

const Counter = () => {
    const [state, dispath] = useReducer(reducer, initialState)

    return (
        <>
            <h1>Learning userReducer in React JS</h1>
            <h3>Count : {state.count}</h3>
            <div className="flex gap-3" >
                <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg" onClick={() => dispath({ type: 'decrement', payload: 3 })}>Decrement by 3</button>
                <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg" onClick={() => dispath({ type: 'decrement' })}>Decrement</button>
                <button className="bg-amber-500 hover:bg-amber-600 px-3 py-1 rounded-lg" onClick={() => dispath({ type: 'reset' })}>Reset</button>
                <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg" onClick={() => dispath({ type: 'increment' })}>Increment</button>
                <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg" onClick={() => dispath({ type: 'increment', payload: 5 })}>Increment by 5</button>
            </div>
        </>
    )
}

export default Counter;
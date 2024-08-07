import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    myValue: 150
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incr: (state, action) => {
            // state.myValue += 6;            
            state.myValue += action.payload;            
        },
        decr: (state, action) => {
            // state.myValue -= 2
            state.myValue -= action.payload
            console.log(action, "Decrement");
        }
    }
})

export const { incr, decr } = counterSlice.actions;

export default counterSlice.reducer;
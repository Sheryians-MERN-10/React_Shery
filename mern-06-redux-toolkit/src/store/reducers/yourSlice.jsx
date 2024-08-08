import { createSlice } from '@reduxjs/toolkit';

// Create a slice of the Redux store
const yourSlice = createSlice({
    name: 'NameOfStoreSlice', // The name of the slice
    initialState: {
        yourValue: 0, // Initial state for yourValue
        yourData: [], // Initial state for yourData, an empty array
    },
    reducers: {
        increment: (state, action) => {
            // state.yourValue+= 1
            state.yourValue += action.payload; // Payload is used here
        },
        decrement: (state) => {
            state.yourValue -= 1;
        },
        addData: (state, action) => {
            state.yourData.push(action.payload); // Add payload data to the array
        },
        removeData: (state, action) => {
            state.yourData = state.yourData.filter(item => item.id !== action.payload.id); // Remove item based on payload
        },
        fetchByAmount: (state, action) => {            
                state.yourValue += action.payload;                            
        }
    },
});

// Export actions for use in components
export const { increment, decrement, addData, removeData, fetchByAmount } = yourSlice.actions;
// Export the reducer to be used in the store configuration
export default yourSlice.reducer;

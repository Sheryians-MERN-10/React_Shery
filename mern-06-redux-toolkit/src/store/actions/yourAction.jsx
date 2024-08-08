// re-exports specific named exports
export { increment, decrement, addData, removeData } from "../reducers/yourSlice";

import { fetchByAmount } from "../reducers/yourSlice";

// Define an asynchronous action creator
export const fetchByAmountAsync = (amt) => async (dispatch, getState) => {
    try {
        // Log the current state to the console
        console.log(getState());

        // Simulate an asynchronous operation (e.g., API call) with setTimeout
        setTimeout(() => {
            dispatch(fetchByAmount(amt));
        }, 2000);
    } catch (error) {
        console.log(error);
    }
};


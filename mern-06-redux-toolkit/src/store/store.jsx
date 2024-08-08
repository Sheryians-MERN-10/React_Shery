import { configureStore } from '@reduxjs/toolkit'; // Import the configureStore function from Redux Toolkit
import yourReducer from './reducers/yourSlice'; // Import the reducer from your slice file

// Configure and create the Redux store
const store = configureStore({
    reducer: {
        // Define the root reducer and the corresponding state key
        // Here, `yourState` is the key in the state tree, and `yourReducer` is the reducer managing that part of the state
        // counter: counterReducer
        NameOfStoreSlice: yourReducer,
    },
});

export default store;

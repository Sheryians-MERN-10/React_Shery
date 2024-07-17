import { createStore } from 'redux';

const store = createStore(reducer);

let arrHistory = [];

// function reducer(state, action) {
function reducer(state = { amount: 1 }, action) {
    if (action.type === 'INCREMENT') {
        
        // immutability
        state.amount = state.amount + 1;   // ❌     

        // return { amount: state.amount + 1 };
    }
    return state;
}

// console.log(store.getState()); // { amount: 1 }
store.subscribe(() => {    
    arrHistory.push(store.getState());
    console.log(arrHistory);
})

// store.dispatch({ type: 'INCREMENT' });
setInterval(() => {
    store.dispatch({ type: 'INCREMENT' });
}, 2000);
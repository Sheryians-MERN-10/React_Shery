import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const increm = 'INCREMENT', decrem = 'DECREMENT', incremByAmt ='INCREMENT_by_amount'

const store = createStore(reducer, applyMiddleware(logger.default));

let arrHistory = [];

// function reducer(state, action) {
function reducer(state = { amount: 1 }, action) {
    // if (action.type === 'INCREMENT') {       
    if (action.type === increm) {       
        // immutability
        // state.amount = state.amount + 1;   // ❌     

        return { amount: state.amount + 1 };
    }
    else if (action.type === decrem) {
        return {amount: state.amount - 1}
    }
    else if (action.type === incremByAmt) {
        return {amount: state.amount + action.payload }
    }

    return state;
}

// console.log(store.getState()); // { amount: 1 }
// store.subscribe(() => {
//     // console.log(store.getState());

//     arrHistory.push(store.getState());
//     console.log(arrHistory);
// })

// ♾️ using action creator - become easy -------- ♾️
function increment() {
    // return { type: 'INCREMENT' };
    return { type: increm };
}
function decrement() {
    // return { type: 'DECREMENT' };
    return { type: decrem };
}
function incrementByAmount(val) {
    // return { type: 'INCREMENT_by_amount', payload: val };
    return { type: incremByAmt, payload: val };
}
// ♾️ --------------------------------- ♾️


// store.dispatch({ type: 'INCREMENT' });
setInterval(() => {
    // store.dispatch({ type: 'INCREMENT' });
    // store.dispatch({ type: 'DECREMENT' });
    // store.dispatch({ type: 'INCREMENT_by_amount', payload: 5 });
    
    // ♾️ using action creator - become easy
    // store.dispatch(increment());
    // store.dispatch(decrement());
    store.dispatch(incrementByAmount(12));

}, 3000);

// console.log(store.getState());
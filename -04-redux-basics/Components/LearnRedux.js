// STEP 1: npm install redux


import React from 'react'
import { createStore } from 'redux'

const LearnRedux = () => {

    const speakAction = () => {
        return {
            type: 'SPEAK'
        }
    }

    const speakReducer = (state = {}, action) => {
        switch (action.type) {
            case 'SPEAK':
                return 'Hello, I am a Redux Action.'
            default:
                return state;
        }
    }

    const store = createStore(speakReducer);

    store.subscribe(() => {
        console.log('store  updated', store.getState())
    })

    return (
        <>
            <h1>Learn Redux - Basics</h1>
        </>
    )
}

export default LearnRedux
import {configureStore } from '@reduxjs/toolkit'
import exampleReducer from '../reduxToolkit/example'


export const store = configureStore({
    reducer: {
        counter: exampleReducer,
    }
})
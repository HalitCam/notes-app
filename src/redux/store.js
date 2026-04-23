import {configureStore} from '@reduxjs/toolkit';
import noteReducer from './noteSlice.js';
 
export const store = configureStore({
    reducer:{
        noteStore : noteReducer,
    }
})
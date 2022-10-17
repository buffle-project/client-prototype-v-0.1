import { configureStore } from '@reduxjs/toolkit'

//Reducer imports
import userSlice from '../slices/userSlice';
// import counterSlice from '../slices/counterSlice';

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    // counter: counterSlice,
  },
})
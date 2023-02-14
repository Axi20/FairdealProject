import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './countreSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
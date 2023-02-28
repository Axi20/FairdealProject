import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carData: {},
  userData: {
    IsLoggedIn: false
  },
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addData: (state, action) => {
        state.carData = action.payload;
    } 
  },
  addUserData: (state, action) => {
    state.userData = action.payload;
}
})

export const {addData, addUserData } = counterSlice.actions

export default counterSlice.reducer
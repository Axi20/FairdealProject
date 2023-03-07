import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carData: {},
  userData: {
    IsLoggedIn: true
  },
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addData: (state, action) => {
        state.carData = action.payload;
    },
  addUserData: (state) => {
    state.userData.IsLoggedIn = !state.userData.IsLoggedIn;
}
}})

export const {addData, addUserData } = counterSlice.actions

export default counterSlice.reducer
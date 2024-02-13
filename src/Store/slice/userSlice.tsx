import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  user: any
}

const initialState: CounterState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    AddUser: (state: any, action) => {
      state.user = action.payload
    },

    RemoveUser: (state: any) => {
      state.user = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { AddUser } = userSlice.actions

export default userSlice.reducer

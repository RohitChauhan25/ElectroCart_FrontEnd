import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  tab: number
}

const initialState: CounterState = {
  tab: 0,
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    updateTab: (state, action) => (state.tab = action.payload),
    resetTab: (state) => {
      state.tab = 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateTab, resetTab } = headerSlice.actions

export default headerSlice.reducer

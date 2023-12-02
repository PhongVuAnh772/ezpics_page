import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'https://apis.ezpics.vn/apis',
}

export const infoSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    CHANGE_VALUE: (state,actions) => {
    
      state.value = actions.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { CHANGE_VALUE} = infoSlice.actions

export default infoSlice.reducer
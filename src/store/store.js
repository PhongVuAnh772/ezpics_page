import { configureStore } from '@reduxjs/toolkit'
import networkReducer from './slice/networkSlice'

export const store = configureStore({
  reducer: {
    network: networkReducer
  },
})
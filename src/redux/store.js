import { configureStore } from '@reduxjs/toolkit'
import experienceReducer from './slices/experienceSlice'

export default configureStore({
  reducer: {
    experienceSlice: experienceReducer,
  }
})
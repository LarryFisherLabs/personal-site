import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sbeStatusArray: [false, false, false, false, false],
    bitcowStatusArray: [false, false, false, false, false],
}

export const experienceSlice = createSlice({
    name: 'experienceSlice',
    initialState,
    reducers: {
        updateSbeStatusArray: (state, action) => {
            state.sbeStatusArray = action.payload.newStatusArray
        },
        updateBitcowStatusArray: (state, action) => {
            state.bitcowStatusArray = action.payload.newStatusArray
        },
    },
})

export const { updateSbeStatusArray, updateBitcowStatusArray } = experienceSlice.actions
export default experienceSlice.reducer

export const selectSbeStatusArray = state => state.experienceSlice.sbeStatusArray
export const selectBitcowStatusArray = state => state.experienceSlice.bitcowStatusArray
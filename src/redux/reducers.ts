import { createSlice } from '@reduxjs/toolkit'

export interface InitialStateType {
  isLoading: boolean
  showMore: boolean
}

const initialState: InitialStateType = {
  isLoading: false,
  showMore: false,
}

const profileStatus = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading
    },
    showMoreStatus: (state) => {
      state.showMore = !state.showMore
    },
  },
})

export const { setIsLoading, showMoreStatus } = profileStatus.actions

export default profileStatus.reducer
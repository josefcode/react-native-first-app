import { ThunkAction, configureStore, Action } from '@reduxjs/toolkit'
import profileStatus from './reducers'

const store = configureStore({
  reducer: {
    profileStatus,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store
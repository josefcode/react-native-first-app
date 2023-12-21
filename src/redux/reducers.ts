import { createSlice } from '@reduxjs/toolkit'
import { PlayerStorageDTO } from '../storage/player/PlayerStorageDTO'

export interface InitialStateType {
  isLoading: boolean
  groups: string[]
  players: PlayerStorageDTO[]
  newPlayerName: string
  team: string
  newGroup: string
}

const initialState: InitialStateType = {
  isLoading: false,
  groups: [],
  players: [],
  newPlayerName: '',
  team: 'team a',
  newGroup: ''
}

const profileStatus = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading
    },
    setGroups: (state, actions) => {
      state.groups = actions.payload
    },
    setPlayers: (state, actions) => {
      state.players = actions.payload
    },
    setNewPlayerName: (state, actions) => {
      state.newPlayerName = actions.payload
    },
    setTeam: (state, actions) => {
      state.team = actions.payload
    },
    setNewGroup: (state, actions) => {
      state.newGroup = actions.payload
    },
  
  },
})

export const { setIsLoading, setGroups, setPlayers, setNewPlayerName, setTeam, setNewGroup } = profileStatus.actions

export default profileStatus.reducer
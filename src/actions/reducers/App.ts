import types from '../types/App'
import * as creators from '../creators/App'
import { creatorsToActions } from "../../types/creatorsToActions";


type State = {
  episodes: [],
  favorite: []
}

type Actions = creatorsToActions<typeof creators>

function initialState(injects?: Partial<State>): State {
  return {
    episodes: [],
    favorite: [],
    ...injects
  }
}

function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case types.FETCH_DATA:
      return { ...state, episodes: action.payload }
    default:
      return state
  }
}


export { initialState, reducer }
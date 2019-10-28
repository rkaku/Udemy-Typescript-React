type State = {
  episodes: [],
  favorite: []
}

function initialState(injects?: Partial<State>): State {
  return {
    episodes: [],
    favorite: [],
    ...injects
  }
}


function reducer(state: State, action: any): State {
  switch (action) {
    default:
      return state
  }
}


export { initialState, reducer }
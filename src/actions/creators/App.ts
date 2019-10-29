import types from '../types/App'


export const fetch_data = (payload: any) => {
  return { type: types.FETCH_DATA, payload: payload }
}
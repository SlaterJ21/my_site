export const LOADED = 'LOADED'
export const VIEW = 'VIEW'

export const load = () => {
  return {
    type: LOADED,
    payload: 'you did it!!!'
  }
}

export const changeView = view => {
  return {
    type: VIEW,
    payload: view
  }
}

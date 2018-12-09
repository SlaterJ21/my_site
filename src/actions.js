export const LOADED = 'LOADED'
export const VIEW = 'VIEW'
export const CHANGE_ABOUT_DATA = 'CHANGE_ABOUT_DATA'

export const load = () => {
  return {
    type: LOADED,
    payload: 'you did it!!!'
  }
}

export const changeAboutData = type => {
  return {
    type: CHANGE_ABOUT_DATA,
    payload: type
  }
}

export const changeView = view => {
  return {
    type: VIEW,
    payload: view
  }
}

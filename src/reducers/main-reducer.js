import {
  LOADED,
  VIEW,
  CHANGE_ABOUT_DATA
} from '../actions'

const initialState = {
  view: 'landing',
  aboutData: 'about'
}

export default (state = initialState, action) => {

  switch (action.type) {
    
    case LOADED:
      return {
        loaded: !state.loaded,
      }

    case VIEW:
      return {
        view: action.payload,
      }

    case CHANGE_ABOUT_DATA:
      return {
        aboutData: action.payload,
        view: state.view
      }

  default: return state
  }
}

import {
  LOADED,
  VIEW
} from '../actions'

const initialState = {
  view: 'landing',
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

  default: return state
  }
}

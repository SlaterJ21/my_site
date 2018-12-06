import {
  LOADED
} from '../actions'

const initialState = {
  view: 'home',
}

export default (state = initialState, action) => {

  switch (action.type) {
    
    case LOADED:
      return {
        loaded: !state.loaded,
      }

  default: return state
  }
}

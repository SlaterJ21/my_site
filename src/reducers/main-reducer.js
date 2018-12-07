import {
  LOADED
} from '../actions'

const initialState = {
  animate: false,
  list: ['Web Developer', 'Carpenter', 'Snow-Boarder', 'Musician', 'Golfer', 'Dog Parent'],
  listNum: 0,
  listChar: 0,
  name: 'Jeffry Slater',
  nameChar: 0,
  linkShow: false,
  buttonShow: false
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

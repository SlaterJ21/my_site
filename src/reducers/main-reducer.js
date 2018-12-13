import {
  VIEW,
  CHANGE_ABOUT_DATA,
  GET_VIDEOS
} from '../actions'

const initialState = {
  view: 'landing',
  aboutData: 'about',
  videos: [
      ['https://www.youtube.com/embed/98fjYGS424s?start=440', 'Wedding'],
      ['https://www.youtube.com/embed/ZQbpIirqzqU', 'Slow Motion'],
      ['https://www.youtube.com/embed/3H8RLejC1kQ', 'Galvanize'],
      ['https://www.youtube.com/embed/L9RyiFRe1oI', 'Climbing']
    ]
}

const shuffle = array => {
  let currentIndex = array.length, temporaryValue, randomIndex
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


export default (state = initialState, action) => {

  switch (action.type) {

    case VIEW:
      return {
        ...state,
        view: action.payload
      }

    case CHANGE_ABOUT_DATA:
      return {
        ...state,
        aboutData: action.payload,
        view: state.view
      }

    case GET_VIDEOS:
     return {
       ...state,
       videos: shuffle(state.videos)
     }

  default: return state
  }
}

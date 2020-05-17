import * as TYPES from 'state/actions/types';

export const intialState = {
  image:
    'https://images.pexels.com/photos/3563888/pexels-photo-3563888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  language: 'en',
};

export default (state = intialState, action) => {
  switch (action.type) {
    case TYPES.SET_IMAGE:
      return { ...state, image: action.payload };
    case TYPES.SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

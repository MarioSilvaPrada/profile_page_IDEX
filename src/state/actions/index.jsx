import * as TYPES from 'state/actions/types';

export const setImage = (url) => (dispatch) => {
  dispatch({
    type: TYPES.SET_IMAGE,
    payload: url,
  });
};

export const setLanguage = (language) => (dispatch) => {
  dispatch({
    type: TYPES.SET_LANGUAGE,
    payload: language,
  });
};

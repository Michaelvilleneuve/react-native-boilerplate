import {
  REFERENCE_CHANGED,
  NAME_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from './types';

export const referenceChanged = (text) => {
  return {
    type: REFERENCE_CHANGED,
    payload: text
  };
};

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  };
};

export const formSubmit = (reference, name) => {
  return (dispatch) => {
    fetch('blabla', {
      data: {
        reference,
        name
      }
    })
      .then(response => response.json())
      .then(user => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: user
        });
      })
      .catch(() => {
        dispatch({
          type: LOGIN_FAIL,
          payload: {}
        });
      });
  };
};

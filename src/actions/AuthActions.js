import { Actions } from 'react-native-router-flux';
import {
  REFERENCE_CHANGED,
  NAME_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_USER
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
    dispatch({ type: LOGIN_USER });
    fetch('blabla', {
      data: {
        reference,
        name
      }
    })
      .then(response => response.json())
      .then(user => {
        loginUserSuccess(dispatch, user);
      })
      .catch(() => {
        loginUserFail(dispatch);
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_FAIL,
    payload: {}
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });
  Actions.main();
};

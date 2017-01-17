import {
  REFERENCE_CHANGED,
  NAME_CHANGED,
  FORM_SUBMIT
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

export const formSubmit = () => {
  return {
    type: FORM_SUBMIT
  };
};

export const loginUser = ({ reference, name }) => {
  return (dispatch) => {
    fetch('blabla', {
      data: {
        reference,
        name
      }
    })
      .then(response => response.json())
      .then(user => console.log(user));
  };
};

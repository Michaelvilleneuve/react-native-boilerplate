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

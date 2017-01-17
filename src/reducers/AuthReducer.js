import {
  REFERENCE_CHANGED,
  NAME_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  reference: '',
  name: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REFERENCE_CHANGED:
      return { ...state, reference: action.payload };
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

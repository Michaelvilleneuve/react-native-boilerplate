import {
  REFERENCE_CHANGED,
  NAME_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAIL
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
    case LOGIN_SUCCESS:
      return { user: action.payload };
    case LOGIN_FAIL:
      console.log('auth fail');
      return { ...state, error: 'Vos identifiants sont incorrects' };
    default:
      return state;
  }
};

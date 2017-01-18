import {
  REFERENCE_CHANGED,
  NAME_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  reference: '',
  name: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REFERENCE_CHANGED:
      return { ...state, reference: action.payload };
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_SUCCESS:
      return { user: action.payload };
    case LOGIN_FAIL:
      return { ...state, error: 'Vos identifiants sont incorrects', loading: false };
    default:
      return state;
  }
};

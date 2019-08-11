import { LOGIN, LOGOUT } from './actions';

export const INITIAL_STATE = {
  logged: false,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        logged: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

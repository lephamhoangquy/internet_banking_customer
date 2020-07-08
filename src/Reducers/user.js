/* eslint-disable no-param-reassign */
import { LOGIN_SUCCESS, LOGIN_FAILED, GET_PROFILE } from '../Constants';

const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      state = { ...action.payload, isLogin: true };
      return { ...state };
    case GET_PROFILE:
      state = action.payload;
      return { ...state, isLogin: true };
    case LOGIN_FAILED:
      return { isLogin: false };
    default:
      return state;
  }
};

export default user;

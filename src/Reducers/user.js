/* eslint-disable no-param-reassign */
import { LOGIN_SUCCESS, LOGIN_FAILED } from '../Constants';

const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      state = { ...action.payload, isLogin: true };
      return { ...state };
    case LOGIN_FAILED:
      return { isLogin: false };
    default:
      return state;
  }
};

export default user;

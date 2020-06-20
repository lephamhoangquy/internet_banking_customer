import { LOGIN_SUCCESS, LOGIN_FAILED } from '../Constants';

const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { isLogin: true };
    case LOGIN_FAILED:
      return { isLogin: false };
    default:
      return state;
  }
};

export default user;

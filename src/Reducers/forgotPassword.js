/* eslint-disable no-param-reassign */
import { FORGOT_PASWORD } from '../Constants';

const forgotPassword = (state = { isForgot: false }, action) => {
  switch (action.payload) {
    case FORGOT_PASWORD:
      return { ...state, isForgot: true };
    default:
      return false;
  }
};

export default forgotPassword;

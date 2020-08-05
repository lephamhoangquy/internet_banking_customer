/* eslint-disable no-param-reassign */
import { FORGOT_PASWORD, VERIFY_FORGOT_PASSWORD } from '../Constants';

const initialState = { isForgot: false, isVerify: false };

const forgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASWORD:
      state.isForgot = true;
      return { ...state };
    case VERIFY_FORGOT_PASSWORD:
      state.isVerify = true;
      return { ...state };
    default:
      return initialState;
  }
};

export default forgotPassword;

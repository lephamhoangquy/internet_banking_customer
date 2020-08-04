/* eslint-disable no-param-reassign */
import {
  TRANSFER_INTERNAL,
  VERIFY_TRANSFER_OTP,
  RESET_TRANSFER,
} from '../Constants';

const initialState = { isTransfer: false, isVerify: false };

const transfer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSFER_INTERNAL:
      state.isTransfer = true;
      return { ...state };
    case VERIFY_TRANSFER_OTP:
      state.isVerify = true;
      return { ...state };
    case RESET_TRANSFER:
      state = initialState;
      return { ...state };
    default:
      return { ...state };
  }
};

export default transfer;

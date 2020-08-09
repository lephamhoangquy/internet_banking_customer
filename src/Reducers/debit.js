/* eslint-disable no-param-reassign */
import { GET_LIST_DEBIT, PAY_DEBIT, CLOSE_OTP_FORM } from '../Constants';

const initialState = { isPayDebit: false };

const debit = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_DEBIT:
      state.total = action.payload.total;
      state.items = action.payload.items;
      return { ...state };
    case PAY_DEBIT:
      return { ...state, isPayDebit: true };
    case CLOSE_OTP_FORM:
      return { ...state, isPayDebit: false };
    default:
      return { ...state };
  }
};

export default debit;

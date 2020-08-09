/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
import _ from 'lodash';
import {
  GET_LIST_DEBIT,
  PAY_DEBIT,
  CLOSE_OTP_FORM,
  REJECT_DEBIT,
} from '../Constants';

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
    case REJECT_DEBIT:
      const cloneState = _.cloneDeep(state);
      cloneState.total = state.total - 1;
      cloneState.items = state.items.filter((elem) => elem.id !== action.id);
      return { ...cloneState };
    default:
      return { ...state };
  }
};

export default debit;

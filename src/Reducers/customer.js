/* eslint-disable no-param-reassign */
import { FIND_CUSTOMER } from '../Constants';

const customer = (state = {}, action) => {
  switch (action.type) {
    case FIND_CUSTOMER: {
      if (action.transaction_type === 1) {
        state = {
          data: action.payload,
          transaction_type: action.transaction_type,
        };
      } else {
        state = action.payload;
      }
      return { ...state, isFind: true };
    }
    default:
      return state;
  }
};

export default customer;

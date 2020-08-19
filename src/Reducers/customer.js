/* eslint-disable no-param-reassign */
import { FIND_CUSTOMER } from '../Constants';

const customer = (state = {}, action) => {
  switch (action.type) {
    case FIND_CUSTOMER: {
      if (action.partnerCode) {
        state = {
          data: action.payload,
          partnerCode: action.partnerCode,
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

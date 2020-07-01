/* eslint-disable no-param-reassign */
import { FIND_CUSTOMER } from '../Constants';

const customer = (state = {}, action) => {
  switch (action.type) {
    case FIND_CUSTOMER:
      state = action.payload;
      return { ...state, isFind: true };
    default:
      return state;
  }
};

export default customer;

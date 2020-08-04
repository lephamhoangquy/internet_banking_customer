/* eslint-disable no-param-reassign */
import { GET_LIST_DEBIT } from '../Constants';

const debit = (state = {}, action) => {
  switch (action.type) {
    case GET_LIST_DEBIT:
      state.total = action.payload.total;
      state.items = action.payload.items;
      return { ...state };
    default:
      return { ...state };
  }
};

export default debit;

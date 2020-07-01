/* eslint-disable no-param-reassign */
import { GET_TRANSACTION_SUCCESS, GET_TRANSACTION_FAILED } from '../Constants';

const transaction = (state = {}, action) => {
  switch (action.type) {
    case GET_TRANSACTION_SUCCESS:
      state = action.payload;
      return { ...state };
    case GET_TRANSACTION_FAILED:
      state = { items: [], total: 0 };
      return { ...state };
    default:
      return state;
  }
};

export default transaction;

/* eslint-disable no-param-reassign */
import _ from 'lodash';
import { GET_LIST_DEBIT } from '../Constants';

const debit = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_DEBIT:
      state = action.payload;
      return _.cloneDeep(state);
    default:
      return [...state];
  }
};

export default debit;

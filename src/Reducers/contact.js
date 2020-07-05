/* eslint-disable no-param-reassign */
import { GET_CONTACT_LIST, CREATE_CONTACT, DELETE_CONTACT } from '../Constants';

const contact = (state = [], action) => {
  switch (action.type) {
    case GET_CONTACT_LIST:
      state = action.payload;
      return [...state];
    case CREATE_CONTACT:
      state = state.concat(action.payload);
      return [...state];
    case DELETE_CONTACT:
      state = action.payload;
      return [...state];
    default:
      return state;
  }
};

export default contact;

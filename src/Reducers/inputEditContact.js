/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import { SET_EDIT_CONTACT_FORM, RESET_EDIT_CONTACT_FORM } from '../Constants';

const input = (state = {}, action) => {
  switch (action.type) {
    case SET_EDIT_CONTACT_FORM:
      const { reminderName, accNumber } = action;
      state = { reminderName, accountNumber: accNumber };
      return { ...state };
    case RESET_EDIT_CONTACT_FORM:
      state = {};
      return { ...state };
    default:
      return state;
  }
};

export default input;

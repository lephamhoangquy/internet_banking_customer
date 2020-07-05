import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import transaction from './transaction';
import customer from './customer';
import contact from './contact';
import inputEditContact from './inputEditContact';

const appReducer = combineReducers({
  form: formReducer,
  user,
  transaction,
  customer,
  contact,
  inputEditContact,
});
export default appReducer;

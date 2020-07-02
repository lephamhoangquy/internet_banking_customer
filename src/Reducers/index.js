import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import transaction from './transaction';
import customer from './customer';
import contact from './contact';

const appReducer = combineReducers({
  form: formReducer,
  user,
  transaction,
  customer,
  contact,
});
export default appReducer;

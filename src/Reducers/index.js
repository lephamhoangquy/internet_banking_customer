import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import transaction from './transaction';
import customer from './customer';

const appReducer = combineReducers({
  form: formReducer,
  user,
  transaction,
  customer,
});
export default appReducer;

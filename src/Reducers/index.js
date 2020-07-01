import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import transaction from './transaction';

const appReducer = combineReducers({
  form: formReducer,
  user,
  transaction,
});
export default appReducer;

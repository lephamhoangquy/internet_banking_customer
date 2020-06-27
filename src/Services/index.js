import { urlApi } from '../Config';
import callApi from '../Utils/apiCaller';
import authHeader from '../Helpers/AuthHeader';

export const login = (email, password) =>
  callApi(urlApi, `auth/customer/login`, 'POST', null, { email, password });

export const debit = () =>
  callApi(urlApi, `customer/debit`, 'POST', authHeader(), {
    reminder_id: 8,
    amount: 100000,
    message: 'test',
  });

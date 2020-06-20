import { urlApi } from '../Config';
import callApi from '../Utils/apiCaller';
import authHeader from '../Helpers/AuthHeader';

export const login = (email, password) =>
  callApi(urlApi, `auth/customer/login`, 'POST', null, { email, password });

export const addCustomer = (body) =>
  callApi(urlApi, `employee/create-customer`, 'POST', authHeader(), body);

export const findCustomerByAccNum = (accNumber) =>
  callApi(urlApi, 'employee/verify-customer', 'POST', authHeader(), {
    account_number: accNumber,
  });

export const chargeMoney = (accNumber, amount) =>
  callApi(urlApi, 'employee/payin', 'POST', authHeader(), {
    account_number: accNumber,
    amount,
  });

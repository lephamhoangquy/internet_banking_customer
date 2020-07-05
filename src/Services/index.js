/* eslint-disable camelcase */
import { urlApi } from '../Config';
import callApi from '../Utils/apiCaller';
import authHeader from '../Helpers/AuthHeader';

export const login = (email, password) =>
  callApi(urlApi, `auth/customer/login`, 'POST', null, { email, password });

export const getTransactionLog = (
  accNumber,
  page,
  isReceiver,
  isSender,
  isRemind,
  isBeRemind,
) => {
  const query = {
    isReceiver,
    isSender,
    isRemind,
    isBeRemind,
  };
  return callApi(
    urlApi,
    `employee/history/${accNumber}?q=${JSON.stringify(
      query,
    )}&page=${page}&per_page=10`,
    'GET',
    authHeader(),
    null,
  );
};

export const findCustomer = (account_number) =>
  callApi(urlApi, `debit/verify-contact`, 'POST', authHeader(), {
    account_number,
  });

export const createDebit = (id, amount, message) =>
  callApi(urlApi, 'debit', 'POST', authHeader(), {
    reminder_id: id,
    amount,
    message,
  });

export const createContact = (reminder_name, account_number) =>
  callApi(urlApi, `customer/create-contact`, 'PUT', authHeader(), {
    reminder_name,
    account_number,
  });

export const getContactList = () =>
  callApi(urlApi, `customer/list-contacts`, 'GET', authHeader(), null);

export const deleteContact = (accNumber) =>
  callApi(
    urlApi,
    `customer/list-contacts/${accNumber}`,
    'DELETE',
    authHeader(),
    null,
  );

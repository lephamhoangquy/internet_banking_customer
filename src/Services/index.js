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
    `customer/history/${accNumber}?q=${JSON.stringify(
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

export const createDebit = (account_number, amount, message) =>
  callApi(urlApi, 'debit', 'POST', authHeader(), {
    account_number,
    amount,
    message,
  });

export const createContact = (reminder_name, account_number) =>
  callApi(urlApi, `customer/create-contact`, 'POST', authHeader(), {
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

export const getListDebit = (page) =>
  callApi(urlApi, `debit?page=${page}&per_page=10`, 'GET', authHeader(), null);

export const getProfile = () =>
  callApi(urlApi, `customer/my-account`, 'GET', authHeader(), null);

export const forgotPassword = (email) =>
  callApi(urlApi, `auth/customer/forgot_password`, 'POST', null, { email });

export const updateContact = (accNumber, reminder_name) =>
  callApi(urlApi, `customer/list-contacts/${accNumber}`, 'PUT', authHeader(), {
    reminder_name,
  });

export const updatePassword = (currentPassword, newPassword) =>
  callApi(urlApi, `auth/customer/update_password`, 'PUT', authHeader(), {
    currentPassword,
    newPassword,
  });

export const transferInternal = (
  sender_account_number,
  receiver_account_number,
  amount,
  message,
  transfer_method,
) =>
  callApi(urlApi, `transfer/internal`, 'POST', authHeader(), {
    sender_account_number,
    receiver_account_number,
    amount,
    message,
    transfer_method,
  });

export const verifyTransferOTP = (OTP, email) =>
  callApi(urlApi, `transfer/customer/verify/code`, 'POST', authHeader(), {
    OTP,
    email,
  });

export const verifyForgotOTP = (OTP, email) =>
  callApi(urlApi, `auth/customer/verify/code`, 'POST', null, { OTP, email });

export const resetPassword = (newPassword, email) =>
  callApi(urlApi, `auth/customer/reset_password`, 'PUT', null, {
    newPassword,
    email,
  });

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

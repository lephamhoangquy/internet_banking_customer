/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-catch */
import { trackPromise } from 'react-promise-tracker';
import _ from 'lodash';
import * as constant from '../Constants';
import * as service from '../Services';

export const loginEmployee = (email, password) => {
  return async (dispatch) => {
    try {
      const ret = await trackPromise(service.login(email, password));
      if (ret.status === 200) {
        const { accessToken, refreshToken, user } = ret.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('user', JSON.stringify(_.omit(user, 'password')));
        dispatch(loginEmployeeSuccess());
        window.location.href = '/dashboard';
      }
    } catch (error) {
      dispatch(loginEmployeeFailed());
      throw error;
    }
  };
  function loginEmployeeSuccess() {
    return {
      type: constant.LOGIN_SUCCESS,
    };
  }
  function loginEmployeeFailed() {
    return {
      type: constant.LOGIN_FAILED,
    };
  }
};

export const fetchTransaction = (
  accNumber,
  page,
  isReceiver,
  isSender,
  isRemind,
  isBeRemind,
) => {
  return async (dispatch) => {
    try {
      const transactions = await trackPromise(
        service.getTransactionLog(
          accNumber,
          page,
          isReceiver,
          isSender,
          isRemind,
          isBeRemind,
        ),
      );
      if (transactions.status === 200) {
        dispatch(fetchTransactionSuccess(transactions.data));
      } else {
        alert('Không tìm thấy.');
        dispatch(fetchTransactionFailed());
      }
    } catch (error) {
      alert('Không tìm thấy.');
      dispatch(fetchTransactionFailed());
      throw error;
    }
  };
  function fetchTransactionSuccess(data) {
    return {
      type: constant.GET_TRANSACTION_SUCCESS,
      payload: data,
    };
  }
  function fetchTransactionFailed() {
    return {
      type: constant.GET_TRANSACTION_FAILED,
    };
  }
};

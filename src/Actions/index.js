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
        window.location.href = '/info';
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

export const findCustomer = (accNumber) => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(service.findCustomer(accNumber));
      if (res.status === 200) {
        dispatch(success(res.data.customer));
      }
    } catch (error) {
      alert('Không tìm thấy số tài khoản');
      throw error;
    }
  };
  function success(data) {
    return {
      type: constant.FIND_CUSTOMER,
      payload: data,
    };
  }
};

export const createDebit = (id, amount, message) => {
  return async (dispatch) => {
    try {
      const res = await service.createDebit(id, amount, message);
      console.log('createDebit -> res', res);
    } catch (error) {
      throw error;
    }
  };
};

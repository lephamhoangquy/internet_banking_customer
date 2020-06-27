/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-catch */
import { trackPromise } from 'react-promise-tracker';
import * as constant from '../Constants';
import * as service from '../Services';

export const loginEmployee = (email, password) => {
  return async (dispatch) => {
    try {
      const ret = await trackPromise(service.login(email, password));
      console.log('ret: ', ret);
      if (ret.status === 200) {
        const { accessToken, refreshToken, user } = ret.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('account_number', user.account_number);
        dispatch(loginEmployeeSuccess());
        window.location.href = '/';
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

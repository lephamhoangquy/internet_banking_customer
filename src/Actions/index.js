/* eslint-disable camelcase */
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-catch */
import { trackPromise } from 'react-promise-tracker';
import _ from 'lodash';
import * as constant from '../Constants';
import * as service from '../Services';

export const loginEmployee = (email, password, ownProps) => {
  return async (dispatch) => {
    try {
      const ret = await trackPromise(service.login(email, password));
      if (ret.status === 200) {
        const { accessToken, refreshToken, customer } = ret.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem(
          'user',
          JSON.stringify(_.omit(customer, 'password')),
        );
        dispatch(loginEmployeeSuccess(ret.data.customer));
        ownProps.history.push('/info');
      }
    } catch (error) {
      dispatch(loginEmployeeFailed());
      throw error;
    }
  };
  function loginEmployeeSuccess(data) {
    return {
      type: constant.LOGIN_SUCCESS,
      payload: data,
    };
  }
  function loginEmployeeFailed() {
    return {
      type: constant.LOGIN_FAILED,
    };
  }
};

export const updatePassword = (currentPassword, newPassword) => {
  return async () => {
    try {
      const res = await trackPromise(
        service.updatePassword(currentPassword, newPassword),
      );
      if (res.status === 200) {
        alert('Cập nhật mật khẩu thành công');
      }
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng điền đúng mật khẩu hiện tại');
    }
  };
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
        dispatch(fetchTransactionFailed());
      }
    } catch (error) {
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
        dispatch(success(res.data.data));
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

export const createDebit = (account_number, amount, message) => {
  return async () => {
    try {
      const res = await trackPromise(
        service.createDebit(account_number, amount, message),
      );
      if (res.status === 200 && res.data.message === 'Success') {
        alert('Nhắc nợ thành công');
      }
    } catch (error) {
      throw error;
    }
  };
};

export const payDebit = (debitId) => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(service.payDebit(debitId));
      if (res.status === 200) {
        dispatch(success());
        alert('Vui lòng kiểm tra email và điền mã OTP. ');
      }
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng kiểm tra lại.');
      throw error;
    }
  };
  function success() {
    return {
      type: constant.PAY_DEBIT,
    };
  }
};

export const rejectDebit = (id, message) => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(service.rejectDebit(id, message));
      if (res.status === 200) {
        dispatch(success(id));
        alert('Hủy ghi nợ thành công');
      }
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng kiểm tra lại.');
      throw error;
    }
  };
  function success(idDebit) {
    return {
      type: constant.REJECT_DEBIT,
      id: idDebit,
    };
  }
};

export const verifyPayDebitOTP = (OTP) => {
  return async () => {
    try {
      const res = await trackPromise(service.verifyPayDebitOTP(OTP));
      if (res.status === 200) {
        alert('Thanh toán nợ thành công');
      }
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng kiểm tra mã OTP. ');
      throw error;
    }
  };
};

export const closeOTPForm = () => ({
  type: constant.CLOSE_OTP_FORM,
});

export const createContact = (reminderName, accountNumber) => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(
        service.createContact(reminderName, accountNumber),
      );
      if (res.status === 200) {
        dispatch(success([res.data.contact]));
        alert('Thêm thành công');
      }
    } catch (error) {
      alert('Xảy ra lỗi');
      throw error;
    }
  };
  function success(data) {
    return {
      type: constant.CREATE_CONTACT,
      payload: data,
    };
  }
};

export const updateContact = (accNumber, reminderName) => {
  return async () => {
    try {
      const res = await trackPromise(
        service.updateContact(accNumber, reminderName),
      );
      if (res.status === 200) {
        alert('Cập nhật thành công');
      }
    } catch (error) {
      alert('Xảy ra lỗi');
      throw error;
    }
  };
};

export const getContactList = () => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(service.getContactList());
      if (res.status === 200) {
        dispatch(success(res.data.contacts.list_contact));
        dispatch(resetEditContactForm());
      }
    } catch (error) {
      throw error;
    }
  };
  function success(data) {
    return {
      type: constant.GET_CONTACT_LIST,
      payload: data,
    };
  }
};

export const setEditContactForm = (reminderName, accNumber) => {
  return {
    type: constant.SET_EDIT_CONTACT_FORM,
    reminderName,
    accNumber,
  };
};

export const resetEditContactForm = () => {
  return {
    type: constant.RESET_EDIT_CONTACT_FORM,
  };
};

export const deleteContact = (accNumber) => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(service.deleteContact(accNumber));
      if (res.status === 200) {
        dispatch(success(res.data.contact.list_contact));
        alert('Xóa thành công');
      }
    } catch (error) {
      alert('Xóa không thành công');
      throw error;
    }
  };
  function success(data) {
    return {
      type: constant.DELETE_CONTACT,
      payload: data,
    };
  }
};

export const getListDebit = (page) => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(service.getListDebit(page));
      if (res.status === 200) {
        dispatch(success(res.data));
      }
    } catch (error) {
      throw error;
    }
  };
  function success(data) {
    return {
      type: constant.GET_LIST_DEBIT,
      payload: data,
    };
  }
};

export const getProfile = () => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(service.getProfile());
      if (res.status === 200) {
        dispatch(success(res.data.my_account));
      }
    } catch (error) {
      alert('Không tìm thấy số tài khoản này. ');
      throw error;
    }
  };
  function success(data) {
    return {
      type: constant.GET_PROFILE,
      payload: data,
    };
  }
};

export const forgotPassword = (email) => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(service.forgotPassword(email));
      if (res.status === 200) {
        dispatch(success());
        alert('Vui lòng nhập mã OTP được nhận từ email.');
      }
    } catch (error) {
      alert('Email không tồn tại trong hệ thống.');
      throw error;
    }
  };
  function success() {
    return {
      type: constant.FORGOT_PASWORD,
    };
  }
};

export const verifyForgotOTP = (OTP, email) => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(service.verifyForgotOTP(OTP, email));
      if (res.status === 200) {
        dispatch(success());
        alert('Vui lòng nhập mật khẩu mới. ');
      }
    } catch (error) {
      alert('Có lỗi xảy ra vui lòng kiểm tra mã code.');
      throw error;
    }
  };
  function success() {
    return {
      type: constant.VERIFY_FORGOT_PASSWORD,
    };
  }
};

export const resetPassword = (newPassword, email) => {
  return async () => {
    try {
      const res = await trackPromise(service.resetPassword(newPassword, email));
      if (res.status === 200) {
        alert('Cập nhật mật khẩu thành công');
      }
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng kiểm tra lại.');
      throw error;
    }
  };
};

export const transferInternal = (
  sender_account_number,
  receiver_account_number,
  amount,
  message,
  transfer_method,
) => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(
        service.transferInternal(
          sender_account_number,
          receiver_account_number,
          amount,
          message,
          transfer_method,
        ),
      );
      if (res.status === 200) {
        dispatch(success());
        alert('Vui lòng kiểm tra email và xác thực mã OTP');
      }
    } catch (error) {
      alert('Có lỗi xảy ra, vui lòng kiểm tra lại.');
      throw error;
    }
  };
  function success() {
    return {
      type: constant.TRANSFER_INTERNAL,
    };
  }
};

export const verifyTransferOTP = (OTP, email) => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(service.verifyTransferOTP(OTP, email));
      if (res.status === 200) {
        dispatch(success());
        alert('Chuyển tiền thành công');
      }
    } catch (error) {
      alert('OTP không chính xác. Vui lòng kiểm tra lại. ');
    }
  };
  function success() {
    return {
      type: constant.VERIFY_TRANSFER_OTP,
    };
  }
};

export const resetStateTransfer = () => ({
  type: constant.RESET_TRANSFER,
});

// transfer PARTNER

export const verifyAccountTransferPartner = (
  receiver_account_number,
  partner_code,
) => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(
        service.verifyAccountTransferPartner(
          receiver_account_number,
          partner_code,
        ),
      );
      if (res.status === 200) {
        if (_.isArray(res.data.data)) {
          dispatch(success(res.data.data[0], 'SANGLE'));
          return;
        }
        dispatch(success(res.data.data, 'QUANGNGUYEN'));
        return;
      }
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng kiểm tra lại.');
      throw error;
    }
  };
  function success(data, partnerCode) {
    return {
      type: constant.FIND_CUSTOMER,
      payload: data,
      partnerCode,
    };
  }
};

export const transferPartner = (
  sender_account_number,
  receiver_account_number,
  amount,
  message,
  transfer_method,
  transaction_type,
  partner_code,
) => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(
        service.transferPartner(
          sender_account_number,
          receiver_account_number,
          amount,
          message,
          transfer_method,
          transaction_type,
          partner_code,
        ),
      );
      if (res.status === 200) {
        dispatch(success());
        alert('Vui lòng kiểm tra email và xác thực mã OTP');
      }
    } catch (error) {
      alert('Có lỗi xảy ra, vui lòng kiểm tra lại.');
      throw error;
    }
  };
  function success() {
    return {
      type: constant.TRANSFER_INTERNAL,
    };
  }
};

export const verifyTransferPartnerOTP = (
  OTP,
  sender_account_number,
  receiver_account_number,
  amount,
  message,
  transfer_method,
  transaction_type,
) => {
  return async (dispatch) => {
    try {
      const res = await trackPromise(
        service.verifyTransferPartnerOTP(
          OTP,
          sender_account_number,
          receiver_account_number,
          amount,
          message,
          transfer_method,
          transaction_type,
        ),
      );
      if (res.status === 200) {
        dispatch(success());
        alert('Chuyển tiền thành công');
      }
    } catch (error) {
      alert('OTP không chính xác. Vui lòng kiểm tra lại. ');
      throw error;
    }
  };
  function success() {
    return {
      type: constant.VERIFY_TRANSFER_OTP,
    };
  }
};

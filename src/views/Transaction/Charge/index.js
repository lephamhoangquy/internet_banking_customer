/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChargeForm from './formCharge';
import {
  transferInternal,
  verifyTransferOTP,
  transferPartner,
  verifyTransferPartnerOTP,
} from '../../../Actions';

const Charge = (props) => {
  const { aboutProps } =
    props.location.aboutProps !== undefined && props.location;
  const { account_number, isDebit, fromContact } =
    aboutProps !== undefined && aboutProps;

  const {
    transfer,
    transferState,
    verifyOTP,
    partnerCode,
    transferExternal,
    verifyOTPExternal,
  } = props;

  const submit = (values) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { amount, message, transfer_method, OTP } = values;
    if (OTP) {
      if (partnerCode) {
        verifyOTPExternal(
          OTP,
          user.account_number,
          account_number,
          Number(amount),
          message,
          Number(transfer_method),
          2,
        );
      } else {
        verifyOTP(OTP, user.email);
      }
    } else if (partnerCode) {
      transferExternal(
        user.account_number,
        account_number,
        amount,
        message,
        Number(transfer_method),
        2,
        partnerCode,
      );
    } else {
      transfer(
        user.account_number,
        account_number,
        amount,
        message,
        Number(transfer_method),
      );
    }
  };
  return (
    <>
      <ChargeForm
        fromContact={fromContact}
        isDebit={isDebit}
        transfer={transferState}
        onSubmit={submit}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    transferState: state.transfer,
    partnerCode: state.customer.partnerCode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    transfer: (
      sender_account_number,
      receiver_account_number,
      amount,
      message,
      transfer_method,
    ) => {
      dispatch(
        transferInternal(
          sender_account_number,
          receiver_account_number,
          amount,
          message,
          transfer_method,
        ),
      );
    },
    verifyOTP: (OTP, email) => {
      dispatch(verifyTransferOTP(OTP, email));
    },
    transferExternal: (
      sender_account_number,
      receiver_account_number,
      amount,
      message,
      transfer_method,
      transaction_type,
      partner_code,
    ) => {
      dispatch(
        transferPartner(
          sender_account_number,
          receiver_account_number,
          amount,
          message,
          transfer_method,
          transaction_type,
          partner_code,
        ),
      );
    },
    verifyOTPExternal: (
      OTP,
      sender_account_number,
      receiver_account_number,
      amount,
      message,
      transfer_method,
      transaction_type,
    ) => {
      dispatch(
        verifyTransferPartnerOTP(
          OTP,
          sender_account_number,
          receiver_account_number,
          amount,
          message,
          transfer_method,
          transaction_type,
        ),
      );
    },
  };
};

Charge.propTypes = {
  location: PropTypes.instanceOf(Object),
  transferState: PropTypes.instanceOf(Object),
  transfer: PropTypes.func,
  transferExternal: PropTypes.func,
  verifyOTP: PropTypes.func,
  verifyOTPExternal: PropTypes.func,
  partnerCode: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Charge);

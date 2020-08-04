/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChargeForm from './formCharge';
import { transferInternal, verifyTransferOTP } from '../../../Actions';

const Charge = (props) => {
  const { aboutProps } =
    props.location.aboutProps !== undefined && props.location;
  const { account_number } = aboutProps !== undefined && aboutProps;

  const { transfer, transferState, verifyOTP } = props;

  const submit = (values) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { amount, message, transfer_method, OTP } = values;
    if (OTP) {
      verifyOTP(OTP, user.email);
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
      <ChargeForm transfer={transferState} onSubmit={submit} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    transferState: state.transfer,
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
  };
};

Charge.propTypes = {
  location: PropTypes.instanceOf(Object),
  transferState: PropTypes.instanceOf(Object),
  transfer: PropTypes.func,
  verifyOTP: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Charge);

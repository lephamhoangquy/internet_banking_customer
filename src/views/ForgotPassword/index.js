/* eslint-disable react/require-default-props */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import ForgotFom from './ForgotForm';
import { forgotPassword, verifyForgotOTP, resetPassword } from '../../Actions';
import Minimal from '../../layouts/Minimal/Minimal';

const ForgotPassword = ({ forgot, forgotState, verify, reset }) => {
  const submit = (values) => {
    const { email, OTP, newPassword } = values;
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    )
      throw new SubmissionError({ email: 'email không hợp lệ' });
    if (newPassword && email) {
      reset(newPassword, email);
    } else if (OTP && !newPassword) {
      verify(OTP, email);
    } else {
      forgot(values.email);
    }
  };
  return (
    <>
      <Minimal />
      <div style={{ padding: 50, marginTop: 20 }}>
        <ForgotFom onSubmit={submit} forgotState={forgotState} />
      </div>
    </>
  );
};

const mapStateToProp = (state) => ({
  forgotState: state.forgotPassword,
});

const mapDispatchToProps = (dispatch) => {
  return {
    forgot: (email) => {
      dispatch(forgotPassword(email));
    },
    verify: (OTP, email) => {
      dispatch(verifyForgotOTP(OTP, email));
    },
    reset: (newPassword, email) => {
      dispatch(resetPassword(newPassword, email));
    },
  };
};

ForgotPassword.propTypes = {
  forgot: PropTypes.func,
  reset: PropTypes.func,
  verify: PropTypes.func,
  forgotState: PropTypes.instanceOf(Object),
};

export default connect(mapStateToProp, mapDispatchToProps)(ForgotPassword);

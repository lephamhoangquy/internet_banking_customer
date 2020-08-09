/* eslint-disable camelcase */
/* eslint-disable no-alert */
/* eslint-disable react/require-default-props */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import Debit from './ListDebit';
import { payDebit, closeOTPForm } from '../../Actions';

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    '& svg': {
      margin: '15px 10px',
    },
  },
};

const Charge = ({ pay, isPayDebit, handleCloseOTPForm }) => {
  const handleCloseOTP = () => handleCloseOTPForm();

  return (
    <div>
      <Debit
        handleCloseOTPForm={handleCloseOTP}
        isPayDebit={isPayDebit}
        payDebit={pay}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isPayDebit: state.debit.isPayDebit,
});

const mapDispatchTopProps = (dispatch) => {
  return {
    pay: (id) => {
      dispatch(payDebit(id));
    },
    handleCloseOTPForm: () => {
      dispatch(closeOTPForm());
    },
  };
};

Charge.propTypes = {
  pay: PropTypes.func.isRequired,
  handleCloseOTPForm: PropTypes.func.isRequired,
  isPayDebit: PropTypes.bool.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchTopProps),
)(Charge);

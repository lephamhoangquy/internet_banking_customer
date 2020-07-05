/* eslint-disable camelcase */
/* eslint-disable no-alert */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Search from './formSearch';
import InfoCustomer from './infoCustomer';
import { findCustomer, createDebit } from '../../../Actions';

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    '& svg': {
      margin: '15px 10px',
    },
  },
  btn: {
    position: 'absolute',
    left: 255,
    '& a': {
      textDecoration: 'none',
    },
  },
};

const Charge = ({ findCustomerDebit, customer, createNewDebit, classes }) => {
  const [isOpenCharge, setOpenCharge] = useState(false);
  const [accNumber, setAccNumber] = useState(null);

  const onSearch = (values) => {
    const { account_number } = values;
    findCustomerDebit(account_number);
    setAccNumber(account_number);
  };

  const onCreate = (values) => {
    const { id } = customer;
    const { amount, message } = values;
    if (id) {
      createNewDebit(id, amount, message);
      setOpenCharge(false);
    }
  };

  return (
    <div>
      <div className={classes.title}>
        <div className={classes.btn}>
          <Link to="/debit">
            <Button color="primary">
              <KeyboardBackspaceIcon />
            </Button>
          </Link>
        </div>
        <LocalAtmIcon fontSize="large" />
        <h2>Tạo nhắc nợ</h2>
      </div>
      <Search isOpenCharge={isOpenCharge} onSubmit={onSearch} />
      {customer.isFind && (
        <InfoCustomer
          customer={customer}
          onCreate={onCreate}
          isOpenCharge={isOpenCharge}
          setOpenCharge={setOpenCharge}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  customer: state.customer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    findCustomerDebit: (accNumber) => {
      dispatch(findCustomer(accNumber));
    },
    createNewDebit: (id, amount, message) => {
      dispatch(createDebit(id, amount, message));
    },
  };
};

Charge.propTypes = {
  findCustomerDebit: PropTypes.func,
  customer: PropTypes.instanceOf(Object),
  createNewDebit: PropTypes.func,
  classes: PropTypes.instanceOf(Object),
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Charge);

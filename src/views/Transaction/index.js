/* eslint-disable camelcase */
/* eslint-disable no-alert */
/* eslint-disable react/require-default-props */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import Search from './components/formSearch';
import InfoCustomer from './components/infoCustomer';
import { findCustomer, verifyAccountTransferPartner } from '../../Actions';

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    '& svg': {
      margin: '15px 10px',
    },
  },
};

const Charge = ({
  findCustomerTrans,
  findCustomerPartner,
  customer,
  classes,
}) => {
  const onSearch = (values) => {
    const { account_number, internal, partner } = values;
    localStorage.setItem('receiver_account_number', account_number);
    if (internal && partner) {
      alert('Vui lòng chọn 1 trong 2 lựa chọn. ');
    } else if (internal) {
      findCustomerTrans(account_number);
    } else if (partner) {
      findCustomerPartner(account_number, 'SANGLE');
    } else {
      alert('Vui lòng chọn phương thức giao dịch');
    }
  };

  return (
    <div>
      <div className={classes.title}>
        <LocalAtmIcon fontSize="large" />
        <h2>Chuyển tiền vào tài khoản</h2>
      </div>
      <Search onSubmit={onSearch} />
      {customer.isFind && <InfoCustomer customer={customer} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  customer: state.customer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    findCustomerTrans: (accNumber) => {
      dispatch(findCustomer(accNumber));
    },
    findCustomerPartner: (accNumber, partnerCode) => {
      dispatch(verifyAccountTransferPartner(accNumber, partnerCode));
    },
    // chargeMoney: (accNumber, amount) => {
    //   dispatch(chargeMoneyByAccNumber(accNumber, amount));
    // },
  };
};

Charge.propTypes = {
  findCustomerTrans: PropTypes.func,
  findCustomerPartner: PropTypes.func,
  customer: PropTypes.instanceOf(Object),
  // chargeMoney: PropTypes.func,
  classes: PropTypes.instanceOf(Object),
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Charge);

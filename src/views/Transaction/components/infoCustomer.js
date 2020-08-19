/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
  content: {
    marginTop: 30,
    padding: 20,
  },
  btnCharge: {
    textAlign: 'center',
    '& a': {
      textDecoration: 'none',
    },
  },
  title: {
    textAlign: 'center',
  },
  info: {
    textAlign: 'center',
    border: '1px solid #ccc',
    padding: 20,
    margin: '0 40px 20px',
  },
  row: {
    display: 'flex',
    borderBottom: '1px dotted #ccc',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    width: '50%',
    textAlign: 'start',
    marginLeft: 100,
  },
  value: {
    width: '50%',
    textAlign: 'start',
  },
};

const InfoCustomer = ({ customer, classes }) => {
  const { account_number, partnerCode } = customer;
  const accountNumber =
    account_number || localStorage.getItem('receiver_account_number');
  return (
    <Container>
      <Paper className={classes.content}>
        <h3 className={classes.title}>Thông tin tài khoản</h3>
        <div className={classes.info}>
          {partnerCode ? (
            <div className={classes.row}>
              <div className={classes.label}>Họ và tên: </div>
              <div className={classes.value}>{customer.data.full_name}</div>
            </div>
          ) : (
            <>
              <div className={classes.row}>
                <div className={classes.label}>Họ và tên: </div>
                <div className={classes.value}>{customer.username}</div>
              </div>
              <div className={classes.row}>
                <div className={classes.label}>Email: </div>
                <div className={classes.value}>{customer.email}</div>
              </div>
              <div className={classes.row}>
                <div className={classes.label}>SĐT: </div>
                <div className={classes.value}>{customer.phone}</div>
              </div>
              <div className={classes.row}>
                <div className={classes.label}>Địa chỉ: </div>
                <div className={classes.value}>{customer.address}</div>
              </div>
              <div className={classes.row}>
                <div className={classes.label}>STK: </div>
                <div className={classes.value}>{account_number}</div>
              </div>
            </>
          )}
        </div>
        <div className={classes.btnCharge}>
          <Link
            to={{
              pathname: '/transaction/charge',
              aboutProps: {
                account_number: accountNumber,
              },
            }}
          >
            <Button variant="contained" color="primary" type="button">
              Chuyển tiền
            </Button>
          </Link>
        </div>
      </Paper>
    </Container>
  );
};

InfoCustomer.propTypes = {
  classes: PropTypes.instanceOf(Object),
  customer: PropTypes.instanceOf(Object),
};

export default withStyles(styles)(InfoCustomer);

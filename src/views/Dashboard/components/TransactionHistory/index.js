/* eslint-disable camelcase */
/* eslint-disable no-alert */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { reset } from 'redux-form';
import _ from 'lodash';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Filter from './Filter';
import HeadList from './HeadTable';
import TransactionItem from './TransactionItem';
import { fetchTransaction } from '../../../../Actions';
import TransacionList from '../../../../Components/Dashboard/TableBody';

const styles = {
  table: {
    width: '96%',
    marginLeft: 20,
  },
  pagination: {
    marginTop: 6,
    display: 'flex',
    justifyContent: 'center',
  },
  notFound: {
    textAlign: 'center',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    '& svg': {
      margin: '15px 10px',
    },
  },
};

const TransactionHistory = ({
  classes,
  getTransaction,
  transaction,
  resetFilter,
  user,
}) => {
  const { account_number } = user;
  const [page, setPage] = useState(1);

  const onFilter = (values) => {
    const isReceiver = _.get(values, 'isReceiver', false);
    const isSender = _.get(values, 'isSender', false);
    const isRemind = _.get(values, 'isRemind', false);
    const isBeRemind = _.get(values, 'isBeRemind', false);
    getTransaction(
      account_number,
      page,
      isReceiver,
      isSender,
      isRemind,
      isBeRemind,
    );
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (user.account_number !== null) {
      getTransaction(user.account_number, page);
    }
  }, [page]);

  const handleReset = () => {
    getTransaction(account_number, page);
    resetFilter();
  };

  const { total, items } = transaction;

  return (
    <div>
      <div className={classes.title}>
        <ReceiptIcon fontSize="large" />
        <h2>Lịch sử giao dịch</h2>
      </div>
      <Filter handleReset={handleReset} onSubmit={onFilter} />
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <HeadList />
          <TransacionList>
            {Array.isArray(items) &&
              items.map((tran, index) => (
                <TransactionItem
                  key={tran.id}
                  index={index + 1}
                  transaction={tran}
                  accNumber={account_number}
                />
              ))}
          </TransacionList>
        </Table>
      </TableContainer>
      {(!Array.isArray(items) || items.length === 0) && (
        <div className={classes.notFound}>
          <p>Không có giao dịch nào.</p>
        </div>
      )}
      <div className={classes.pagination}>
        <Pagination count={Math.ceil(total / 10)} onChange={handleChangePage} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transaction: state.transaction,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTransaction: (
      accNumber,
      page,
      isReceiver,
      isSender,
      isRemind,
      isBeRemind,
    ) => {
      dispatch(
        fetchTransaction(
          accNumber,
          page,
          isReceiver,
          isSender,
          isRemind,
          isBeRemind,
        ),
      );
    },
    resetFilter: () => {
      dispatch(reset('filterTransaction'));
    },
  };
};

TransactionHistory.propTypes = {
  classes: PropTypes.instanceOf(Object),
  getTransaction: PropTypes.func,
  transaction: PropTypes.instanceOf(Object),
  resetFilter: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object),
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(TransactionHistory);

/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import React from 'react';
import { TableCell, TableRow, Chip } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { formatter } from '../../../../Helpers/ToCurrency';

const styles = {
  tagCategory: {
    '& div': {
      marginRight: 4,
    },
  },
  isAccept: {
    '& div': {
      marginRight: 4,
    },
    '& button': {
      borderRadius: 15,
    },
  },
};
const TransactionItem = ({ transaction, index }) => {
  const {
    updated_at,
    sender_account_number,
    receiver_account_number,
    transaction_type,
    amount,
  } = transaction;

  const { account_number } = JSON.parse(localStorage.getItem('user'));

  const getTransactionType = (transactionType) => {
    switch (transactionType) {
      case 1:
        return <Chip label="Nội bộ" />;
      case 2:
        return <Chip color="primary" label="Liên ngân hàng" />;
      case 3:
        return <Chip color="secondary" label="Ghi nợ" />;
      default:
        return <Chip variant="outlined" label="None" />;
    }
  };

  const getTransactionMethod = (number) => {
    if (
      number === sender_account_number &&
      (transaction_type === 1 || transaction_type === 2)
    )
      return <Chip color="secondary" label="Chuyển tiền" />;
    if (
      number === receiver_account_number &&
      (transaction_type === 1 || transaction_type === 2)
    )
      return <Chip color="primary" label="Nhận tiền" />;
    if (number === receiver_account_number && transaction_type === 3)
      return <Chip color="primary" label="Nhắc nợ" />;
    if (number === sender_account_number && transaction_type === 3)
      return <Chip color="secondary" label="Bị nhắc nợ" />;
  };

  return (
    <>
      <TableRow>
        <TableCell>{index}</TableCell>
        <TableCell>{new Date(updated_at).toLocaleString()}</TableCell>
        <TableCell>
          {sender_account_number === 'GDV'
            ? 'Nạp tại ngân hàng'
            : sender_account_number}
        </TableCell>
        <TableCell>{receiver_account_number}</TableCell>
        <TableCell>{getTransactionType(transaction_type)}</TableCell>
        <TableCell>{amount > 0 && formatter.format(amount)}</TableCell>
        <TableCell>{getTransactionMethod(account_number)}</TableCell>
      </TableRow>
    </>
  );
};

TransactionItem.propTypes = {
  index: PropTypes.number.isRequired,
  transaction: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(TransactionItem);

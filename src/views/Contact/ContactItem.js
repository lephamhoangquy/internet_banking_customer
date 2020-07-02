/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
const TransactionItem = ({ contact, index }) => {
  return (
    <>
      <TableRow>
        <TableCell>{index}</TableCell>
        <TableCell>{contact.account_number}</TableCell>
        <TableCell>{contact.reminder_name}</TableCell>
        <TableCell />
      </TableRow>
    </>
  );
};

TransactionItem.propTypes = {
  index: PropTypes.number.isRequired,
  contact: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(TransactionItem);

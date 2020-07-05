/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { formatter } from '../../../Helpers/ToCurrency';

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
const DebitItem = ({ index, debit }) => {
  // {new Date(updated_at).toLocaleString()}
  return (
    <>
      <TableRow>
        <TableCell>{index}</TableCell>
        <TableCell>{new Date(debit.updated_at).toLocaleString()}</TableCell>
        <TableCell>{debit.creator_customer_id}</TableCell>
        <TableCell>{debit.reminder_id}</TableCell>
        <TableCell>{formatter.format(debit.amount)}</TableCell>
        <TableCell>{debit.message}</TableCell>
      </TableRow>
    </>
  );
};

DebitItem.propTypes = {
  index: PropTypes.number.isRequired,
  debit: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(DebitItem);

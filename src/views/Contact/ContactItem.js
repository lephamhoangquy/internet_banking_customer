/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = {
  delete: {
    color: 'rgb(220, 0, 78)',
  },
};
const TransactionItem = ({ setEdit, contact, index, classes }) => {
  const { account_number, reminder_name } = contact;
  return (
    <>
      <TableRow>
        <TableCell>{index}</TableCell>
        <TableCell>{account_number}</TableCell>
        <TableCell>{reminder_name}</TableCell>
        <TableCell>
          <Link to="/create-contact">
            <Button
              onClick={() => setEdit(reminder_name, account_number)}
              size="small"
              color="primary"
            >
              <EditIcon size="small" />
            </Button>
          </Link>
          <Button className={classes.delete}>
            <DeleteIcon size="small" />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

TransactionItem.propTypes = {
  index: PropTypes.number.isRequired,
  contact: PropTypes.instanceOf(Object).isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  setEdit: PropTypes.func.isRequired,
};

export default withStyles(styles)(TransactionItem);

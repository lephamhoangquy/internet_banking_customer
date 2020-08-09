/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { formatter } from '../../../Helpers/ToCurrency';
import OTPForm from '../Dialog/OTPForm';
import ConfirmDebit from '../Dialog/ConfirmDebit';

const styles = {
  delete: {
    color: 'rgb(220, 0, 78)',
  },
};
const DebitItem = ({
  index,
  debit,
  classes,
  payDebit,
  isPayDebit,
  handleCloseOTPForm,
  handleSubmitOTP,
}) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDebit, setOpenDebit] = useState(false);
  const handleCloseDebit = () => {
    setOpenDebit(false);
  };

  const handleOpenDebit = () => {
    setOpenDebit(true);
  };

  return (
    <>
      <TableRow>
        <TableCell>{index}</TableCell>
        <TableCell>{new Date(debit.updated_at).toLocaleString()}</TableCell>
        <TableCell>{debit.creator_customer_id}</TableCell>
        <TableCell>{debit.reminder_id}</TableCell>
        <TableCell>{formatter.format(debit.amount)}</TableCell>
        <TableCell>{debit.message}</TableCell>
        <TableCell>
          {user.id !== debit.creator_customer_id && (
            <Button
              style={{ marginRight: 4 }}
              color="primary"
              size="small"
              variant="outlined"
              onClick={handleOpenDebit}
            >
              Thanh toán
            </Button>
          )}
          <Button className={classes.delete} size="small" variant="outlined">
            Hủy bỏ
          </Button>
        </TableCell>
      </TableRow>
      <ConfirmDebit
        id={debit.id}
        open={openDebit}
        handleClose={handleCloseDebit}
        payDebit={payDebit}
      />
      <OTPForm
        open={isPayDebit}
        handleClose={handleCloseOTPForm}
        onSubmit={handleSubmitOTP}
      />
    </>
  );
};

DebitItem.propTypes = {
  index: PropTypes.number.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  debit: PropTypes.instanceOf(Object).isRequired,
  payDebit: PropTypes.func.isRequired,
  handleCloseOTPForm: PropTypes.func.isRequired,
  handleSubmitOTP: PropTypes.func.isRequired,
  isPayDebit: PropTypes.bool.isRequired,
};

export default withStyles(styles)(DebitItem);

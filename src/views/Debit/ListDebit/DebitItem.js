/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { formatter } from '../../../Helpers/ToCurrency';
import OTPForm from '../Dialog/OTPForm';
import ConfirmDebit from '../Dialog/ConfirmDebit';
import RemoveDebit from '../Dialog/RemoveDebit';

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
  setIdDebit,
  handleSubmitRemove,
}) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDebit, setOpenDebit] = useState(false);
  const [openRemoveDebit, setOpenRemoveDebit] = useState(false);
  const handleCloseDebit = () => {
    setOpenDebit(false);
  };

  const handleOpenDebit = () => {
    setOpenDebit(true);
  };

  const handleCloseRemoveDebit = () => {
    setOpenRemoveDebit(false);
  };

  const handleOpenRremmoveDebit = () => {
    setIdDebit(debit.id);
    setOpenRemoveDebit(true);
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
          {debit.payment_status === 1 ? (
            <Chip color="primary" label="Đã thanh toán" />
          ) : (
            <Chip color="secondary" label="Chưa thanh toán" />
          )}
        </TableCell>
        <TableCell>
          {user.id !== debit.creator_customer_id && (
            <Button
              style={{ marginRight: 4 }}
              color="primary"
              size="small"
              variant="outlined"
              onClick={handleOpenDebit}
              disabled={Boolean(debit.payment_status)}
            >
              Thanh toán
            </Button>
          )}
          <Button
            onClick={handleOpenRremmoveDebit}
            className={classes.delete}
            size="small"
            variant="outlined"
            disabled={Boolean(debit.payment_status)}
          >
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
      <RemoveDebit
        open={openRemoveDebit}
        handleClose={handleCloseRemoveDebit}
        onSubmit={handleSubmitRemove}
      />
    </>
  );
};

DebitItem.propTypes = {
  index: PropTypes.number.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  debit: PropTypes.instanceOf(Object).isRequired,
  payDebit: PropTypes.func.isRequired,
  setIdDebit: PropTypes.func.isRequired,
  handleSubmitRemove: PropTypes.func.isRequired,
  handleCloseOTPForm: PropTypes.func.isRequired,
  handleSubmitOTP: PropTypes.func.isRequired,
  isPayDebit: PropTypes.bool.isRequired,
};

export default withStyles(styles)(DebitItem);

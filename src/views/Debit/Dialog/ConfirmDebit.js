/* eslint-disable react/require-default-props */
/* eslint-disable camelcase */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

const AlertDialog = ({ handleClose, open, id, payDebit }) => {
  const handlePay = () => {
    payDebit(id);
    handleClose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Xác nhận</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Bạn sẽ thanh toán ghi nợ này?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Trở lại
        </Button>
        <Button onClick={handlePay} color="secondary" autoFocus>
          Thanh toán
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AlertDialog.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  id: PropTypes.number,
  payDebit: PropTypes.func,
};

export default AlertDialog;

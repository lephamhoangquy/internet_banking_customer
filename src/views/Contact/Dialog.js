/* eslint-disable camelcase */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

const AlertDialog = ({ handleClose, open, account_number, removeContact }) => {
  const handleDelete = () => {
    removeContact(account_number);
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
          Bạn có thực sự muốn xóa?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Trở lại
        </Button>
        <Button onClick={handleDelete} color="secondary" autoFocus>
          Xóa
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AlertDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  account_number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default AlertDialog;

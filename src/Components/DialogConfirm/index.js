/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import PropTypes from 'prop-types';

export const DialogConfirm = ({
  open,
  actionName,
  handleAccept,
  handleClose,
  handleDelete,
  handleDeleteCat,
}) => {
  let action;
  if (actionName === 'accept') {
    action = handleAccept;
  } else if (actionName === 'delete') {
    action = handleDelete;
  } else if (actionName === 'deleteCat') {
    action = handleDeleteCat;
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có thực sự chắc chắn với thao tác này?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Trở lại
          </Button>
          <Button onClick={action} color="primary" autoFocus>
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DialogConfirm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleAccept: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  actionName: PropTypes.string.isRequired,
};

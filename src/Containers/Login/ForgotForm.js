/* eslint-disable react/require-default-props */
/* eslint-disable import/no-mutable-exports */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { reduxForm, Field } from 'redux-form';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import TextField from '../../Components/CustomField/TextField';

let FormDialog = ({ open, handleClose, handleSubmit, forgotState }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Quên mật khẩu</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Vui lòng điền nhập email của bạn .
            </DialogContentText>
            <Field
              name="email"
              component={TextField}
              label="Nhập email"
              variant="outlined"
              fullWidth
              required
            />
            {forgotState.isForgot && (
              <Field
                name="OTP"
                component={TextField}
                label="Nhập mã OTP"
                variant="outlined"
                fullWidth
                required
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Trở lại
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Reset mật khẩu
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

FormDialog = reduxForm({
  form: 'forgotForm',
})(FormDialog);

FormDialog.propTypes = {
  handleSubmit: PropTypes.func,
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  forgotState: PropTypes.bool,
};

export default FormDialog;

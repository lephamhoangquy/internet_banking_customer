/* eslint-disable react/require-default-props */
/* eslint-disable import/no-mutable-exports */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import TextField from '../../../Components/CustomField/TextField';

let Charge = ({ open, handleClose, handleSubmit }) => {
  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Xác nhận mã OTP</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Field
            name="OTP"
            label="Nhập mã OTP"
            component={TextField}
            type="number"
          />
          <DialogActions>
            <Button onClick={() => handleClose(false)} color="primary">
              Trở lại
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Xác nhận
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

Charge = reduxForm({
  form: 'chargeFrom',
})(Charge);

Charge.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default Charge;

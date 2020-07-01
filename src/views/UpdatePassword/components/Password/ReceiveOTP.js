/* eslint-disable react/require-default-props */
/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '../../../../Components/CustomField/TextField';

const styles = {};

let ReceiveOTP = ({ handleSubmit, classes }) => {
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <div className={classes.field}>
            <Field
              name="email"
              component={TextField}
              label="Nhập Email"
              variant="outlined"
              fullWidth
              required
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.btn}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Nhận OTP
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

ReceiveOTP = reduxForm({
  form: 'receiveOTP',
})(ReceiveOTP);

ReceiveOTP.propTypes = {
  handleSubmit: PropTypes.func,
};

export default withStyles(styles)(ReceiveOTP);

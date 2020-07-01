/* eslint-disable react/require-default-props */
import React from 'react';
import { Grid, CardHeader } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import UpdateIcon from '@material-ui/icons/Update';
import ReceiveOTP from './components/Password/ReceiveOTP';

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    '& svg': {
      margin: '15px 10px',
    },
  },
};

const UpdatePassword = ({ classes }) => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item md={12} xs={12}>
          <div className={classes.title}>
            <UpdateIcon fontSize="large" />
            <h2>Cập nhật mật khẩu</h2>
          </div>
          <ReceiveOTP />
        </Grid>
      </Grid>
    </div>
  );
};

UpdatePassword.propTypes = {
  classes: PropTypes.instanceOf(Object),
};

export default withStyles(styles)(UpdatePassword);

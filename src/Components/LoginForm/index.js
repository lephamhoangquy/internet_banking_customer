/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Recaptcha from 'react-recaptcha';
import TextField from '../CustomField/TextField';
import CopyRight from '../CopyRight';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  forgetPass: {
    marginTop: 10,
    color: '#007bff',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
  captcha: {
    marginTop: 10,
  },
}));

let LoginForm = (props) => {
  const classes = useStyles();
  const { handleSubmit, user, setVerify } = props;
  const isLogin = _.get(user, 'isLogin', null);
  const verifyRecaptcha = () => {
    return setVerify(true);
  };
  return (
    <Container component="main" maxWidth="xs">
      {/* Check login failure => alert  */}
      {isLogin === false && (
        <Alert variant="filled" severity="error">
          Đăng nhập thất bại, vui lòng kiểm tra lại email và mật khẩu
        </Alert>
      )}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng nhập
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                name="email"
                component={TextField}
                label="Nhập Username"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="password"
                component={TextField}
                fullWidth
                label="Nhập mật khẩu"
                variant="outlined"
                required
                type="password"
              />
            </Grid>
          </Grid>
          <div className={classes.captcha}>
            <Recaptcha
              sitekey="6LfQ-sAZAAAAAHwunMSGx7E4NmX2THX1r_uzlgqn"
              render="explicit"
              verifyCallback={verifyRecaptcha}
            />
          </div>

          <div className={classes.forgetPass}>
            <Link to="/forgot-password">
              <span>Quên mật khẩu?</span>
            </Link>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Đăng nhập
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <CopyRight />
      </Box>
    </Container>
  );
};

LoginForm = reduxForm({
  form: 'loginForm',
})(LoginForm);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  setVerify: PropTypes.func,
  user: PropTypes.instanceOf(Object).isRequired,
};

export default LoginForm;

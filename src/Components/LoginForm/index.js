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
import { Captcha } from '../CustomField/Recaptcha';
// import ReCAPTCHA from 'react-google-recaptcha';
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
}));

let LoginForm = (props) => {
  const classes = useStyles();
  const { handleSubmit, user } = props;
  const isLogin = _.get(user, 'isLogin', null);
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
          <Field name="captcharesponse" component={Captcha} />
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
          {/* <ReCAPTCHA
            sitekey="6LePB6cZAAAAAK2Q7aRVXHqaz-zzPrkUrOLJ2JmQ"
            onChange={onChange}
          /> */}
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
  handleClickOpen: PropTypes.func,
  user: PropTypes.instanceOf(Object).isRequired,
};

export default LoginForm;

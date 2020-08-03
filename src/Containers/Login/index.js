import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { SubmissionError, reset } from 'redux-form';
import LoginForm from '../../Components/LoginForm';
import { loginEmployee, forgotPassword } from '../../Actions';
import ForgotForm from './ForgotForm';

const Login = ({ login, user, forgot, forgotState }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submit = (values) => {
    const { email, password } = values;
    login(email, password);
  };

  const handleForgot = (values) => {
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    )
      throw new SubmissionError({ email: 'email không hợp lệ' });
    forgot(values.email);
    // handleClose();
    // resetFormForgot();
  };

  return (
    <div>
      <LoginForm
        handleClickOpen={handleClickOpen}
        user={user}
        onSubmit={submit}
      />
      <ForgotForm
        open={open}
        handleClose={handleClose}
        onSubmit={handleForgot}
        forgotState={forgotState}
      />
    </div>
  );
};

const mapStateToProp = (state) => ({
  user: state.user,
  forgotState: state.forgotPassword,
});

const mapDispatchToProp = (dispatch, ownProps) => {
  return {
    login: (email, password) => {
      dispatch(loginEmployee(email, password, ownProps));
    },
    forgot: (email) => {
      dispatch(forgotPassword(email));
    },
  };
};

Login.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  forgotState: PropTypes.instanceOf(Object).isRequired,
  login: PropTypes.func.isRequired,
  forgot: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProp, mapDispatchToProp)(Login));

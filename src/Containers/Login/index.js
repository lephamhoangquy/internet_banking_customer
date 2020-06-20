import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from '../../Components/LoginForm';
import { loginEmployee } from '../../Actions';

const Login = ({ login, user }) => {
  const submit = (values) => {
    const { email, password } = values;
    login(email, password);
  };
  return (
    <div>
      <LoginForm user={user} onSubmit={submit} />
    </div>
  );
};

const mapStateToProp = (state) => ({
  user: state.user,
});

const mapDispatchToProp = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(loginEmployee(email, password));
    },
  };
};

Login.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(mapStateToProp, mapDispatchToProp)(Login);

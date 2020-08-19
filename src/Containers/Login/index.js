import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import LoginForm from '../../Components/LoginForm';
import { loginEmployee } from '../../Actions';

const Login = ({ login, user }) => {
  const [isVerify, setVerify] = useState(false);

  const submit = (values) => {
    if (isVerify) {
      const { email, password } = values;
      login(email, password);
    } else {
      alert('Vui lòng chọn Captcha. ');
    }
  };

  return (
    <div>
      <LoginForm user={user} onSubmit={submit} setVerify={setVerify} />
    </div>
  );
};

const mapStateToProp = (state) => ({
  user: state.user,
});

const mapDispatchToProp = (dispatch, ownProps) => {
  return {
    login: (email, password) => {
      dispatch(loginEmployee(email, password, ownProps));
    },
  };
};

Login.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  login: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProp, mapDispatchToProp)(Login));

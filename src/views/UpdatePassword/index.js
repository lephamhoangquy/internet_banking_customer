/* eslint-disable react/require-default-props */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import Password from './UpdateForm';
import { updatePassword } from '../../Actions';

const UpdatePassword = ({ update }) => {
  const submit = (values) => {
    if (values.newPassword && values.newPassword.length < 8)
      throw new SubmissionError({ newPassword: 'Mật khẩu phải trên 8 ký tự' });
    update(values.currentPassword, values.newPassword);
  };
  return (
    <div style={{ padding: 50 }}>
      <Password onSubmit={submit} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (currentPass, newPass) => {
      dispatch(updatePassword(currentPass, newPass));
    },
  };
};

UpdatePassword.propTypes = {
  update: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(UpdatePassword);

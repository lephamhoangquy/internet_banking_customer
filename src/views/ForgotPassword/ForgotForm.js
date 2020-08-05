/* eslint-disable import/no-mutable-exports */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
} from '@material-ui/core';
import { reduxForm, Field } from 'redux-form';
import TextField from '../../Components/CustomField/TextField';

let Password = (props) => {
  const { handleSubmit, forgotState } = props;
  return (
    <Card>
      <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
        <CardHeader subheader="Quên mật khẩu" title="Mật khẩu" />
        <Divider />
        <CardContent>
          <div>
            <Field
              style={{ width: '50%', marginBottom: 10 }}
              name="email"
              component={TextField}
              label="Nhập email"
              variant="outlined"
              required
            />
          </div>
          <div>
            <Field
              style={{ width: '50%', marginBottom: 10 }}
              name="OTP"
              component={TextField}
              fullWidth
              label="Nhập mã OTP"
              variant="outlined"
              disabled={!forgotState.isForgot}
            />
          </div>
          <div>
            <Field
              style={{ width: '50%', marginBottom: 10 }}
              name="newPassword"
              component={TextField}
              fullWidth
              label="Nhập mật khẩu mới"
              variant="outlined"
              disabled={!forgotState.isVerify}
            />
          </div>
        </CardContent>
        <Divider />
        <div style={{ padding: 4 }}>
          <Button type="submit" color="primary" variant="outlined">
            {forgotState.isForgot ? `Xác nhận` : `Reset mật khẩu`}
          </Button>
        </div>
      </form>
    </Card>
  );
};

Password = reduxForm({
  form: 'updatePassword',
})(Password);

Password.propTypes = {
  handleSubmit: PropTypes.func,
  forgotState: PropTypes.instanceOf(Object),
};

export default Password;

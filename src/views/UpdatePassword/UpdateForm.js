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
  const { handleSubmit } = props;
  return (
    <Card>
      <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
        <CardHeader subheader="Cập nhật mật khẩu" title="Mật khẩu" />
        <Divider />
        <CardContent>
          <div>
            <Field
              style={{ width: '50%', marginBottom: 10 }}
              name="currentPassword"
              component={TextField}
              label="Nhập mật khẩu cũ"
              variant="outlined"
              type="password"
              required
            />
          </div>
          <div>
            <Field
              style={{ width: '50%' }}
              name="newPassword"
              component={TextField}
              label="Nhập mật khẩu mới"
              type="password"
              variant="outlined"
              required
            />
          </div>
        </CardContent>
        <Divider />
        <div style={{ padding: 4 }}>
          <Button type="submit" color="primary" variant="outlined">
            Cập nhật
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
};

export default Password;

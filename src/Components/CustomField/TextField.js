/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@material-ui/core/TextField';

const renderTextField = ({
  classes,
  label,
  input,
  variant,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <TextField
      label={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
      variant={variant}
    />
  );
};

export default renderTextField;

/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const renderAutoComplete = ({
  classes,
  label,
  input,
  variant,
  options,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <Autocomplete
      freeSolo
      options={options}
      renderInput={(params) => (
        <TextField
          label={label}
          error={touched && invalid}
          helperText={touched && error}
          {...params}
          {...input}
          {...custom}
          variant={variant}
        />
      )}
    />
  );
};

export default renderAutoComplete;

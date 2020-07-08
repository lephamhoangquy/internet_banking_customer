/* eslint-disable react/prop-types */
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { renderFromHelper } from './FromHelper';

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  multiple,
  value,
  defaultValue,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="id">{label}</InputLabel>
    <Select
      native
      multiple={multiple}
      value={value}
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: 'id',
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

/* eslint-disable react/require-default-props */
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';

const renderCheckbox = ({ input, label, color }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={!!input.value}
          onChange={input.onChange}
          color={color}
        />
      }
      label={label}
    />
  </div>
);

renderCheckbox.propTypes = {
  input: PropTypes.instanceOf(Object),
  label: PropTypes.string,
  color: PropTypes.string,
};

export default renderCheckbox;

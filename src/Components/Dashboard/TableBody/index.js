/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { TableBody } from '@material-ui/core';
import PropTypes from 'prop-types';

const CompanyList = ({ children }) => {
  return <TableBody>{children}</TableBody>;
};

CompanyList.propTypes = {
  children: PropTypes.any,
};

export default CompanyList;

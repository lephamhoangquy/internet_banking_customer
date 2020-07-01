/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { Topbar } from './components';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: '100%',
  },
  content: {
    height: '100%',
  },
}));

const Minimal = (props) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
};

export default Minimal;

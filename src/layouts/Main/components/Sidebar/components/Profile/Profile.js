/* eslint-disable react/require-default-props */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 60,
    height: 60,
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    textDecoration: 'none',
  },
  name: {
    marginTop: theme.spacing(1),
  },
}));

const Profile = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        to="/info"
      >
        {user.fullname.split(' ').slice(-1).join(' ')}
      </Avatar>
      <Typography className={classes.name} variant="h4">
        {user.fullname}
      </Typography>
      <Typography variant="body2">{user.account_number}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;

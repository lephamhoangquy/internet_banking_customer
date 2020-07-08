/* eslint-disable react/require-default-props */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ContactsIcon from '@material-ui/icons/Contacts';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90%',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
  },
  title: {
    fontWeight: 700,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: 56,
    width: 56,
  },
  icon: {
    height: 32,
    width: 32,
  },
}));

const TasksProgress = (props) => {
  const { className, user, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Danh Sách Người Nhận
            </Typography>
            <Typography variant="h3">
              {!_.isEmpty(user) && `${user.list_contact.length} tài khoản`}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <ContactsIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TasksProgress.propTypes = {
  className: PropTypes.string,
  user: PropTypes.instanceOf(Object),
};

export default TasksProgress;

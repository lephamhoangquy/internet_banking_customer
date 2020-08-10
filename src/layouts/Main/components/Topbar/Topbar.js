/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import { socket } from '../../../../socket';
import { DialogNoti } from '../../../../Components/Notification';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
  logo: {
    width: '45%',
  },
}));

const Topbar = (props) => {
  const [notifications, setNoti] = useState([]);
  const [openNoti, setOpenNoti] = useState(false);

  const noti = localStorage.getItem('notifications')
    ? JSON.parse(localStorage.getItem('notifications'))
    : [];
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const handleSignOut = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  useEffect(() => {
    socket.on('debitNoti', (res) => {
      const message = { msg: res, type: 'createDebit' };
      const tempArr = [];
      tempArr.push(message);
      localStorage.setItem(
        'notifications',
        JSON.stringify(noti.concat(tempArr)),
      );
      setNoti(noti.concat(tempArr));
    });
  }, []);

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <RouterLink to="/">
          <img
            className={classes.logo}
            alt="Logo"
            src="https://www.icicibank.com/managed-assets/images/offer-zone/brand-logos/internet-banking.png"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit" onClick={() => setOpenNoti(true)}>
            <Badge badgeContent={noti.length} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            onClick={handleSignOut}
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <DialogNoti
        open={openNoti}
        onClose={() => setOpenNoti(false)}
        notifications={noti}
      />
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
};

export default Topbar;

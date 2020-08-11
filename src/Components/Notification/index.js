/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

export function DialogNoti(props) {
  const classes = useStyles();
  const { onClose, open, notifications } = props;

  const handleClose = () => {
    onClose();
    localStorage.removeItem('notifications');
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle
        id="simple-dialog-title"
        style={{ fontWeight: 'bold !important', textAlign: 'center' }}
      >
        Thông báo
      </DialogTitle>
      {notifications.length > 0 ? (
        <List>
          {notifications.map((noti, index) => (
            <ListItem button key={index}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText style={{ marginRight: 4 }} primary={noti.msg} />
              <Link
                onClick={handleClose}
                style={{ marginBottom: 2 }}
                to="/debit"
              >
                Xem ngay
              </Link>
            </ListItem>
          ))}
        </List>
      ) : (
        <p style={{ padding: 16 }}>Không có thông báo mới.</p>
      )}
    </Dialog>
  );
}

DialogNoti.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  notifications: PropTypes.instanceOf(Array),
};

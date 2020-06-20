/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/List';
import DoneIcon from '@material-ui/icons/Done';
import PropTypes from 'prop-types';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const DropdownButton = ({
  isAccepted,
  handleOpen,
  handleSetAction,
  postId,
  anchorEl,
  setAnchorEl,
}) => {
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        <ListIcon fontSize="small" />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {!isAccepted && (
          <MenuItem
            onClick={() => {
              handleOpen();
              handleSetAction(postId, 'accept');
            }}
          >
            <ListItemIcon>
              <DoneIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Duyệt" />
          </MenuItem>
        )}
        <MenuItem
          onClick={() => {
            handleOpen();
            handleSetAction(postId, 'delete');
          }}
        >
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Xóa" />
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

DropdownButton.propTypes = {
  isAccepted: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleSetAction: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  setAnchorEl: PropTypes.func.isRequired,
  anchorEl: PropTypes.instanceOf(Object).isRequired,
};

export default DropdownButton;

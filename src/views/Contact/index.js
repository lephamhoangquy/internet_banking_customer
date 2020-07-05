/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {
  getContactList,
  setEditContactForm,
  deleteContact,
} from '../../Actions';
import HeadList from './HeadTable';
import ContactList from '../../Components/Dashboard/TableBody';
import ContactItem from './ContactItem';

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    '& svg': {
      margin: '15px 10px',
    },
  },
  btn: {
    position: 'absolute',
    right: 50,
    top: 88,
    '& a': {
      textDecoration: 'none',
    },
  },
};

const Contact = ({ classes, getContact, contact, setEdit, removeContact }) => {
  useEffect(() => {
    getContact();
  }, []);

  return (
    <div>
      <div className={classes.title}>
        <RecentActorsIcon fontSize="large" />
        <h2>Danh sách người nhận</h2>
        <div className={classes.btn}>
          <Link to="/create-contact">
            <Button color="primary" size="small" variant="outlined">
              Thêm mới
            </Button>
          </Link>
        </div>
      </div>
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <HeadList />
          <ContactList>
            {Array.isArray(contact) &&
              contact.map((elem, index) => (
                <ContactItem
                  setEdit={setEdit}
                  key={index}
                  index={index + 1}
                  contact={elem}
                  removeContact={removeContact}
                />
              ))}
          </ContactList>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contact: state.contact,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getContact: () => {
      dispatch(getContactList());
    },
    setEdit: (reminder, accNumber) => {
      dispatch(setEditContactForm(reminder, accNumber));
    },
    removeContact: (accNumber) => {
      dispatch(deleteContact(accNumber));
    },
  };
};

Contact.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  contact: PropTypes.instanceOf(Array).isRequired,
  getContact: PropTypes.func.isRequired,
  setEdit: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Contact);

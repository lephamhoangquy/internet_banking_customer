import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ContactForm from './createForm';
import { createContact, updateContact } from '../../../Actions';

const Contact = ({ createNewContact, inputEdit, editContact }) => {
  const submit = (values) => {
    const { reminderName, accountNumber } = values;
    if (_.isEmpty(inputEdit)) {
      createNewContact(reminderName, accountNumber);
    } else {
      editContact(accountNumber, reminderName);
    }
  };

  return <ContactForm initialValues={inputEdit} onSubmit={submit} />;
};

const mapStateToProps = (state) => ({
  inputEdit: state.inputEditContact,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createNewContact: (reminderName, accountNumber) => {
      dispatch(createContact(reminderName, accountNumber));
    },
    editContact: (accountNumber, reminderName) => {
      dispatch(updateContact(accountNumber, reminderName));
    },
  };
};

Contact.propTypes = {
  createNewContact: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired,
  inputEdit: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

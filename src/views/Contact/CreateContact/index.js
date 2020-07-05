import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactForm from './createForm';
import { createContact } from '../../../Actions';

const Contact = ({ createNewContact, inputEdit }) => {
  const submit = (values) => {
    const { reminderName, accountNumber } = values;
    createNewContact(reminderName, accountNumber);
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
  };
};

Contact.propTypes = {
  createNewContact: PropTypes.func.isRequired,
  inputEdit: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

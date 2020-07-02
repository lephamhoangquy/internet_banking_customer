import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactForm from './createForm';
import { createContact } from '../../../Actions';

const Contact = ({ createNewContact }) => {
  const submit = (values) => {
    const { reminderName, accountNumber } = values;
    createNewContact(reminderName, accountNumber);
  };

  return <ContactForm onSubmit={submit} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewContact: (reminderName, accountNumber) => {
      dispatch(createContact(reminderName, accountNumber));
    },
  };
};

Contact.propTypes = {
  createNewContact: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Contact);

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/require-default-props */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MoneyIcon from '@material-ui/icons/Money';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from 'react-router-dom';
import TextField from '../../../Components/CustomField/TextField';
import { renderSelectField } from '../../../Components/CustomField/SelectField';

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    '& svg': {
      margin: '15px 10px',
    },
  },
  form: {
    padding: '30px 150px',
  },
  field: {
    marginBottom: 16,
  },
  btn: {
    textAlign: 'center',
  },
  back: {
    position: 'absolute',
    left: 255,
    '& a': {
      textDecoration: 'none',
    },
  },
  fieldSelect: {
    '& div': {
      width: '44%',
    },
  },
};

let CreateContact = ({ classes, handleSubmit }) => {
  return (
    <div>
      <div className={classes.title}>
        <div className={classes.back}>
          <Link to="/transaction">
            <Button color="primary">
              <KeyboardBackspaceIcon />
            </Button>
          </Link>
        </div>
        <MoneyIcon fontSize="large" />
        <h2>Chuyển tiền</h2>
      </div>
      <Paper>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.field}>
            <Field
              name="amount"
              component={TextField}
              label="Nhập số tiền"
              variant="outlined"
              type="number"
              required
              fullWidth
            />
          </div>
          <div className={classes.field}>
            <Field
              name="message"
              component={TextField}
              fullWidth
              label="Nhập lời nhắn"
              variant="outlined"
            />
          </div>
          <div className={classes.fieldSelect}>
            <Field
              name="transfer_method"
              label="Hình thức thanh toán"
              component={renderSelectField}
              required
            >
              <option value="" disabled />
              <option value={1}>Người gửi trả phí</option>
              <option value={2}>Người nhận trả phí</option>
            </Field>
          </div>
          <div className={classes.btn}>
            <Button type="submit" variant="contained" color="primary">
              Chuyển ngay
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

CreateContact = reduxForm({
  form: 'createContact',
})(CreateContact);

CreateContact.propTypes = {
  classes: PropTypes.instanceOf(Object),
  handleSubmit: PropTypes.func,
};

export default compose(withStyles(styles))(CreateContact);

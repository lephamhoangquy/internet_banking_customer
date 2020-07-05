/* eslint-disable react/require-default-props */
import React from 'react';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
import TextField from '../../../Components/CustomField/TextField';

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
};

let CreateContact = ({ classes, handleSubmit, initialValues }) => {
  return (
    <div>
      <div className={classes.title}>
        <GroupAddIcon fontSize="large" />
        {_.isEmpty(initialValues) ? (
          <h2>Thêm mới người nhận</h2>
        ) : (
          <h2>Cập nhật người nhận</h2>
        )}
      </div>
      <Paper>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.field}>
            <Field
              name="reminderName"
              component={TextField}
              label="Nhập tên gợi nhớ"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className={classes.field}>
            <Field
              name="accountNumber"
              component={TextField}
              fullWidth
              label="Nhập số tài khoản"
              variant="outlined"
              required
              type="number"
            />
          </div>
          <div className={classes.btn}>
            {_.isEmpty(initialValues) ? (
              <Button type="submit" variant="contained" color="primary">
                Thêm
              </Button>
            ) : (
              <Button type="submit" variant="contained" color="primary">
                Cập nhật
              </Button>
            )}
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
  initialValues: PropTypes.instanceOf(Object).isRequired,
};

export default compose(withStyles(styles))(CreateContact);

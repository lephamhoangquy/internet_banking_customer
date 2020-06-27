/* eslint-disable react/require-default-props */
/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '../../../Components/CustomField/TextField';

const styles = {
  form: {
    display: 'flex',
    padding: '4px 20px 20px',
  },
  field: {
    width: '60%',
  },
  btn: {
    width: '35%',
    textAlign: 'center',
    marginTop: 17,
  },
};

let Debit = ({ handleSubmit, classes }) => {
  return (
    <Container>
      <Paper className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.field}>
            <Field
              name="account_number"
              component={TextField}
              required
              type="number"
              label="Nhập vào số tài khoản"
              fullWidth
            />
          </div>
          <div className={classes.btn}>
            <Button
              size="small"
              type="submit"
              variant="contained"
              color="primary"
            >
              Nhắc nợ
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

Debit = reduxForm({
  form: 'debitForm',
})(Debit);

Debit.propTypes = {
  handleSubmit: PropTypes.func,
  classes: PropTypes.instanceOf(Object),
};

export default withStyles(styles)(Debit);

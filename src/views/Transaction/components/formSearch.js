/* eslint-disable react/require-default-props */
/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AutoComplete from '../../../Components/CustomField/AutoComplete';
import Checkbox from '../../../Components/CustomField/Checkbox';

const styles = {
  form: {
    display: 'flex',
    padding: '4px 20px 20px',
  },
  field: {
    width: '60%',
  },
  fieldCheckbox: {
    width: '20%',
  },
  btn: {
    width: '35%',
    textAlign: 'center',
    marginTop: 17,
  },
};

let searchForm = ({ handleSubmit, classes }) => {
  return (
    <Container>
      <Paper className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.fieldCheckbox}>
            <Field
              name="internal"
              component={Checkbox}
              required
              label="Nội bộ"
            />
            <Field
              name="partner"
              component={Checkbox}
              required
              label="Liên ngân hàng"
            />
          </div>
          <div className={classes.field}>
            <Field
              name="account_number"
              component={AutoComplete}
              required
              options={['quy', 'quang']}
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
              Tìm kiếm
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

searchForm = reduxForm({
  form: 'searchForm',
})(searchForm);

searchForm.propTypes = {
  handleSubmit: PropTypes.func,
  classes: PropTypes.instanceOf(Object),
};

export default withStyles(styles)(searchForm);

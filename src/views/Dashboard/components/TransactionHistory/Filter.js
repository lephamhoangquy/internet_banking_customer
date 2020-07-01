/* eslint-disable react/require-default-props */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Checkbox from '../../../../Components/CustomField/Checkbox';

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  btn: {
    marginTop: 7,
  },
  filter: {
    marginTop: 14,
  },
  title: {
    fontWeight: 'bold',
  },
  field: {
    marginTop: 4,
  },
};

let FilterForm = ({ classes, handleSubmit, handleReset }) => {
  return (
    <Container className={classes.filter}>
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.title}>
            <p>Chọn tiêu chí:</p>
          </div>
          <div className={classes.field}>
            <Field
              name="isReceiver"
              component={Checkbox}
              label="Nhận tiền"
              color="primary"
              checked
            />
          </div>
          <div className={classes.field}>
            <Field
              name="isSender"
              component={Checkbox}
              label="Chuyển tiền"
              color="secondary"
              checked
            />
          </div>
          <div className={classes.field}>
            <Field
              name="isRemind"
              component={Checkbox}
              label="Nhắc nợ"
              color="primary"
              checked
            />
          </div>
          <div className={classes.field}>
            <Field
              name="isBeRemind"
              component={Checkbox}
              label="Bị Nhắc nợ"
              color="secondary"
              checked
            />
          </div>
          <div className={classes.btn}>
            <Button
              size="small"
              type="submit"
              variant="contained"
              color="primary"
            >
              Áp dụng
            </Button>
            <Button onClick={handleReset} color="primary">
              <RotateLeftIcon />
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

FilterForm = reduxForm({
  form: 'filterTransaction',
})(FilterForm);

FilterForm.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func,
  handleReset: PropTypes.func,
};

export default withStyles(styles)(FilterForm);

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AccNumber from './components/AccNumber';
import NameUser from './components/NameUser';
import Contact from './components/Contact';
import AccBalance from './components/AccBalance';
import TransactionHistory from './components/TransactionHistory';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const Dashboard = ({ user }) => {
  const classes = useStyles();

  // const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <NameUser user={user} />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <AccNumber user={user} />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Contact user={user} />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <AccBalance user={user} />
        </Grid>
        <Grid item lg={12} md={12} xl={9} xs={12}>
          <TransactionHistory user={user} />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

Dashboard.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, null)(Dashboard);

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import AccNumber from './components/AccNumber';
import NameUser from './components/NameUser';
import Contact from './components/Contact';
import AccBalance from './components/AccBalance';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem('user'));

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
      </Grid>
    </div>
  );
};

export default Dashboard;

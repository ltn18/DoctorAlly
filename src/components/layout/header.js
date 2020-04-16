import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.avatar} style={{backgroundColor: 'white'}}>
        <img src="logo192.png" alt="LOGO" style={{width: 50, height: 50}}/>
        <span style={{marginLeft: 20}}>HACKCOVY</span>
      </Button>
      <div className={classes.buttonGroup}>
        <Button color="primary">Volunteer</Button>
        <Button color="secondary">Request help</Button>
        <Button style={{color: 'green'}}>Supply stores</Button>
        <Button style={{color: '#8134AF'}}>Covid-19 Data</Button>
        <Button>How it works</Button>
        <Button>About</Button>
      </div>
    </div>
  )
}

export default Header;

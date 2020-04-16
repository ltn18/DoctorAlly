import React from 'react';

import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const handleRouteSwitch = (path) => {
    history.push("/" + path)
  }

  return (
    <div className={classes.root}>
      <Button
        onClick={() => { handleRouteSwitch("") }}
        className={classes.avatar}
        style={{ backgroundColor: 'white' }}
      >
        <img src="logo192.png" alt="LOGO" style={{ width: 50, height: 50 }} />
        <span style={{ marginLeft: 20 }}>HACKCOVY</span>
      </Button>

      <div className={classes.buttonGroup}>
        <Button onClick={() => { handleRouteSwitch("about") }} >About</Button>
        <Button onClick={() => { handleRouteSwitch("volunteer") }} color="primary" >Volunteer</Button>
        <Button onClick={() => { handleRouteSwitch("request_help/1") }} color="secondary" >Request help</Button>
        <Button onClick={() => { handleRouteSwitch("supply_stores") }} style={{ color: 'green' }} >Supply stores</Button>
        <Button onClick={() => { handleRouteSwitch("covid19_data") }} style={{ color: '#8134AF' }} >Covid-19 Data</Button>
        <Button onClick={() => { handleRouteSwitch("how_it_works") }} >How it works</Button>
      </div>
      
    </div>
  )
}

export default Header;

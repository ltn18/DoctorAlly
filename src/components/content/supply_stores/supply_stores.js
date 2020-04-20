import React, { useState } from 'react';
import StoreMap from './map';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  h2: {
    marginTop: 50,
    marginBottom: 40,
    textAlign: 'center',
  },
}));

const Supply_stores = () => {
  const classes = useStyles()
  return (
    <>
      <div>
        <h2 className={classes.h2}>Hanoi Supply Map</h2>
        <p style={{textAlign: 'center'}}>In order to support medical workers, especially those are in need of regular supplies such as food and household appliances, we have created an easy-approaching map for supply stores. The only thing you have to do is to enter your location and the nearest shops will appear for you to choose!!</p>
        <StoreMap />
      </div>
    </>

  );
}

export default Supply_stores;

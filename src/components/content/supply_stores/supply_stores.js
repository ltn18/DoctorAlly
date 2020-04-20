import React, { useState } from 'react';
import StoreMap from './map';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Divider, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  h1: {
    marginTop: 50,
    marginBottom: 30,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 50,
    marginTop: 50,
  },
  header: {
    fontSize: 30,
    marginTop: 5,
  },
  w50: {
    width: '50%',
  },
  ml: {
    marginLeft: 65,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: '50%',
  },
}));

const Supply_stores = () => {
  const classes = useStyles()
  return (
    <>
      <div>
        <h1 className={classes.h1}>Hanoi Supply Map</h1>
        <p style={{ textAlign: 'center' }}>In order to support medical workers, especially those are in need of regular supplies such as food and household appliances, we have created an easy-approaching map for supply stores. The only thing you have to do is to enter your location and the nearest shops will appear for you to choose!!</p>
        <StoreMap />
      </div>
      <h1 className={classes.h1}>How to use</h1>
      <Container className={classes.container}>
        <div className={classes.w50}>
          <p className={classes.header}>First, search your location on the map</p>
          <p><i>It can be an address, a place, a neighborhood, a region, a postcode or even the coordinate of the place.</i></p>
        </div>
        <div>
          <img src='store1.png' alt='1' ></img>
        </div>
      </Container>
      <Divider light />
      <Container className={classes.container}>
        <div>
          <img src='store2.png' alt='2' ></img>
        </div>
        <div className={classes.w50, classes.ml} >
          <p className={classes.header}>Choose a place</p>
          <p><i>You will find your location with various points nearby. Those are stores around 2km near you.</i></p>
        </div>
      </Container>
      <Divider light />
      <Container className={classes.container}>
        <div className={classes.w50}>
          <p className={classes.header}>Discover the stores</p>
          <p><i>Hover the stores for details. These stores are categorized by color as below.</i></p>
          <List>
            <ListItem>
                <div className={classes.circle} style={{ backgroundColor: '#FF8C00' }}></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Convenience Store and Pharmacy</div>
            </ListItem>
            <ListItem>
                <div className={classes.circle} style={{ backgroundColor: '#9ACD32' }}></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fast Food, Cafe and Bakery</div>
            </ListItem>
            <ListItem>
                <div className={classes.circle} style={{ backgroundColor: '#008000' }}></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Small Grocery Store, Supercenter, Superette and Supermarket</div>
            </ListItem>
            <ListItem>
                <div className={classes.circle} style={{ backgroundColor: '#00FFFF' }}></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Restaurant and Specialty Food Store</div>
            </ListItem>
            <ListItem>
                <div className={classes.circle} style={{ backgroundColor: '#FF0000' }}></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other stores</div>
            </ListItem>
          </List>
        </div>
        <div>
          <img src='store3.png' alt='3' style={{marginTop: 10}}></img>
        </div>
      </Container>
    </>

  );
}

export default Supply_stores;

import React, { useState, useContext } from 'react';
import StoreMap from './map';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import localeContext, {getText} from '../../context/localeCtx';
const useStyles = makeStyles((theme) => ({
  h1: {
    marginTop: 50,
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Faustina',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 50,
    marginTop: 50,
    fontFamily: 'Faustina',
  },
  header: {
    fontSize: 30,
    marginTop: 5,
    fontFamily: 'Faustina',
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
  font: {
    fontFamily: 'Faustina',
  },
  mr50: {
    marginRight: 50,
  }
}));
const Supply_stores = () => {
  const classes = useStyles();
  const locale = useContext(localeContext);
  return (
    <>
      <div>
        <h1 className={classes.h1}>{getText("supply_stores", "hanoimap", locale.lang)}</h1>
        <p style={{ textAlign: 'center' }}>{getText("supply_stores", "description", locale.lang)}</p>
        <StoreMap />
      </div>
      <h1 className={classes.h1}>{getText("supply_stores", "howtouse", locale.lang)}</h1>
      <Container className={classes.container}>
        <div className={classes.w50, classes.mr50}>
          <p className={classes.header}>{getText("supply_stores", "firstTitle", locale.lang)}</p>
          <p><i>{getText("supply_stores", "firstDescription", locale.lang)}</i></p>
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
          <p className={classes.header}>{getText("supply_stores", "secondTitle", locale.lang)}</p>
          <p><i>{getText("supply_stores", "secondDescription", locale.lang)}</i></p>
        </div>
      </Container>
      <Divider light />
      <Container className={classes.container}>
        <div className={classes.w50, classes.mr50}>
          <p className={classes.header}>{getText("supply_stores", "thirdTitle", locale.lang)}</p>
          <p><i>{getText("supply_stores", "thirdDescription", locale.lang)}</i></p>
          <List>
            <ListItem>
              <div className={classes.circle} style={{ backgroundColor: '#FF8C00' }}></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getText("supply_stores", "thirdItem1", locale.lang)}</div>
            </ListItem>
            <ListItem>
              <div className={classes.circle} style={{ backgroundColor: '#9ACD32' }}></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getText("supply_stores", "thirdItem2", locale.lang)}</div>
            </ListItem>
            <ListItem>
              <div className={classes.circle} style={{ backgroundColor: '#008000' }}></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getText("supply_stores", "thirdItem3", locale.lang)}</div>
            </ListItem>
            <ListItem>
              <div className={classes.circle} style={{ backgroundColor: '#00FFFF' }}></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getText("supply_stores", "thirdItem4", locale.lang)}</div>
            </ListItem>
            <ListItem>
              <div className={classes.circle} style={{ backgroundColor: '#FF0000' }}></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getText("supply_stores", "thirdItem5", locale.lang)}</div>
            </ListItem>
          </List>
        </div>
        <div>
          <img src='store3.png' alt='3' style={{ marginTop: 10 }}></img>
        </div>
      </Container>
    </>
  );
}
export default Supply_stores;
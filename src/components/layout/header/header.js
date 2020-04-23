import React, { useContext } from 'react';
import localeContext, { getText } from "../../context/localeCtx";

import { useHistory } from 'react-router-dom';

import { Button, MenuItem, FormControl, Select } from '@material-ui/core';
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
  font: {
    fontFamily: 'Lexend Giga',
    fontSize: 11
  },
  fontLogo: {
    fontFamily: 'Yeseva One',
  }
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const locale = useContext(localeContext);

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
        {/* <img src="logo192.png" alt="LOGO" style={{ width: 50, height: 50 }} /> */}
        <span style={{ marginLeft: 5, fontSize: 25 }} className={classes.fontLogo}>DoctorAlly</span>
      </Button>

      <div className={classes.buttonGroup}>
        <Button
          onClick={() => { handleRouteSwitch("about") }}
          className={classes.font}
        >{getText("header", "about", locale.lang)}</Button>

        <Button
          onClick={() => { handleRouteSwitch("volunteer") }}
          color="primary"
          className={classes.font}
        >{getText("header", "volunteer", locale.lang)}</Button>

        <Button
          onClick={() => { handleRouteSwitch("request_help") }}
          color="secondary"
          className={classes.font}
        >{getText("header", "request_help", locale.lang)}</Button>

        <Button
          onClick={() => { handleRouteSwitch("supply_stores") }}
          style={{ color: 'green' }}
          className={classes.font}
        >{getText("header", "supply_stores", locale.lang)}</Button>

        <Button
          onClick={() => { handleRouteSwitch("covid19_data") }}
          style={{ color: '#8134AF' }}
          className={classes.font}
        >{getText("header", "covid19_data", locale.lang)}</Button>

        <Button
          onClick={() => { handleRouteSwitch("how_it_works") }}
          style={{ color: '#F77737' }}
          className={classes.font}
        >{getText("header", "how_it_works", locale.lang)}</Button>

        <FormControl className={classes.formControl}>
          <Select
            value={locale.lang}
            onChange={(e) => { locale.setLang(e.target.value) }}
            className={classes.font}
          >
            <MenuItem value={"ENG"} className={classes.font}>ENG</MenuItem>
            <MenuItem value={"VIE"} className={classes.font}>VIE</MenuItem>
          </Select>
        </FormControl>
      </div>

    </div>
  )
}

export default Header;

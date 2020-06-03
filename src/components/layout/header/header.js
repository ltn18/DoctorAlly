import React, { useContext } from 'react';
import localeContext, { getText } from "../../context/localeCtx";

import { useHistory } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Button, MenuItem, FormControl, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import authContext from '../../context/auth';

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
    fontFamily: 'Merriweather',
    fontSize: "15px",
  },
  fontLogo: {
    fontFamily: 'Yeseva One',
  },
  formControl: {
    marginTop: "15px",
  },
  btn_volunteer: {
    // borderRadius: '10px',
    padding: 10,
    fontFamily: 'Faustina',
    fontSize: "15px",
    "&:hover": {
      backgroundColor: '#3f51b5',
      color: 'white',
      cursor: 'pointer',
    }
  },
  btn_request_help: {
    // borderRadius: '10px',
    padding: 10,
    fontFamily: 'Faustina',
    fontSize: "15px",
    "&:hover": {
      backgroundColor: '#c51162',
      color: 'white',
      cursor: 'pointer',
    }
  },
  btn_nearby_stores: {
    // borderRadius: '10px',
    padding: 10,
    fontFamily: 'Faustina',
    fontSize: "15px",
    backgroundColor: 'white',
    color: '#008000',
    "&:hover": {
      backgroundColor: '#008000',
      color: 'white',
      cursor: 'pointer'
    }
  }
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const locale = useContext(localeContext);

  const handleRouteSwitch = (path) => {
    history.push("/" + path)
  }
  const { authUser } = useContext(authContext);
  return (
    <div className={classes.root}>
      
      <Button
        onClick={() => { handleRouteSwitch("") }}
        className={classes.avatar}
        style={{ backgroundColor: 'white' }}
      >
        {/* <img src="logo.jpg" alt="LOGO" style={{ width: "50px", height: "50px" }} /> */}
        <FavoriteIcon style={{ color: 'red' }} />
        <span style={{ marginLeft: 5, fontSize: "30px" }} className={classes.fontLogo}>DoctorAlly</span>
      </Button>
      <div className={classes.buttonGroup}>
        {authUser && authUser.user.role === "volunteer" ? (
        <>
          <Button
          variant="outlined"
          onClick={() => { handleRouteSwitch("volunteer") }}
          color="primary"
          className={classes.btn_volunteer}
        >{getText("header", "volunteer", locale.lang)}</Button>

        <Button
          variant="outlined"
          onClick={() => { handleRouteSwitch("supply_stores") }}
          className={classes.btn_nearby_stores}
          // style={{ backgroundColor: 'green', color: 'white' }}
        >{getText("header", "supply_stores", locale.lang)}</Button>
        </>
        )
        :(
        <>
        <Button
          variant="outlined"
          onClick={() => { handleRouteSwitch("request_help/1") }}
          color="secondary"
          className={classes.btn_request_help}
        >{getText("header", "request_help", locale.lang)}</Button>

        <Button
          variant="outlined"
          onClick={() => { handleRouteSwitch("supply_stores") }}
          className={classes.btn_nearby_stores}
          // style={{ backgroundColor: 'green', color: 'white' }}
        >{getText("header", "supply_stores", locale.lang)}</Button>
        </>
        )}
      
        {!authUser ? 
        (<Button
          variant="outlined"
          onClick={() => { handleRouteSwitch("auth") }}
          className={classes.btn_nearby_stores}
          // style={{ backgroundColor: 'green', color: 'white' }}
        >Login/Register</Button>):(
          <Button
          variant="outlined"
          onClick={() => { handleRouteSwitch("profile") }}
          className={classes.btn_nearby_stores}
          // style={{ backgroundColor: 'green', color: 'white' }}
        >{authUser.user.username}'s Profile</Button>
        )}
        

      </div>
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
  )
}

export default Header;

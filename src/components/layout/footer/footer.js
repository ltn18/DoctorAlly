import React, { useContext } from 'react';
import localeContext, { getText } from "../../context/localeCtx";

import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,

  },
  hover: {
    "&:hover": {
      cursor: 'pointer'
    },
    fontFamily: 'Lexend Giga',
  },
  font: {
    fontFamily: 'Lexend Giga',
  }
}));

const Footer = () => {
  const classes = useStyles();
  const history = useHistory();
  const locale = useContext(localeContext);

  const handleRouteSwitch = (path) => {
    history.push("/" + path)
  }

  return (
    <Typography className={classes.root}>
      <Link
        className={classes.hover}
        onClick={() => { handleRouteSwitch("contact_us") }}
        style={{ marginRight: 20 }}
      >
        {getText("footer", "contact_us", locale.lang)}
      </Link>
      <Link
        className={classes.hover}
        onClick={() => { handleRouteSwitch("feedbacks") }}
        style={{ marginRight: 20 }}
      >
        {getText("footer", "feedbacks", locale.lang)}
      </Link>
      <Link
        className={classes.hover}
        onClick={() => { handleRouteSwitch("privacy_policy") }}
        style={{ marginRight: 20 }}
      >
        {getText("footer", "privacy_policy", locale.lang)}
      </Link>
      <Link
        className={classes.hover}
        onClick={() => { handleRouteSwitch("terms_of_use") }}
        style={{ marginRight: 20 }}
      >
        {getText("footer", "terms_of_use", locale.lang)}
      </Link>
      <div className={classes.font}>© 2020 DoctorAlly</div>
    </Typography>
  )
}

export default Footer;

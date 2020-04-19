import React from 'react';

import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  hover: {
    "&:hover": {
      cursor: 'pointer'
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  const history = useHistory();

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
        Contact Us
      </Link>
      <Link
        className={classes.hover}
        onClick={() => { handleRouteSwitch("feedbacks") }}
        style={{ marginRight: 20 }}
      >
        Feedbacks
      </Link>
      <Link
        className={classes.hover}
        onClick={() => { handleRouteSwitch("privacy_policy") }}
        style={{ marginRight: 20 }}
      >
        Privacy Policy
      </Link>
      <Link
        className={classes.hover}
        onClick={() => { handleRouteSwitch("terms_of_use") }}
        style={{ marginRight: 20 }}
      >
        Terms of Use
      </Link>
      © 2020 HackCoVy
    </Typography>
  )
}

export default Footer;

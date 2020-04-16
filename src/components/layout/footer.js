import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      <Link href="#" style={{marginRight: 20}}>
        Contact Us
      </Link>
      <Link href="#" style={{marginRight: 20}}>
        Privacy Policy
      </Link>
      <Link href="#" style={{marginRight: 20}}>
        Terms of Use
      </Link>
      © 2020 HackCoVy
    </Typography>
  )
}

export default Footer;

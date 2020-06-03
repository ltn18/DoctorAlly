  
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import localeContext, { getText } from '../../context/localeCtx';

import Devs from './devCard';

const useStyles = makeStyles({
  h2: {
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
  },
  h3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    justifyContent: "center",
    display: "flex"
  },
});

export default function About() {
  const classes = useStyles();
  const locale = useContext(localeContext);

  return (
    <div>
      <h2 className={classes.h2}>{getText("about", "h2", locale.lang)}</h2>
      <h3 className={classes.h3}>{getText("about", "h3", locale.lang)}</h3>
      <Box color="text.primary" className={classes.box}>{getText("about", "box", locale.lang)}</Box>
      <Devs />
    </div>

  );
}
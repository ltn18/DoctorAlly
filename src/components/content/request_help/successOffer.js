import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import localeContext, { getText } from '../../context/localeCtx';
import { makeStyles } from '@material-ui/core';
import { CardContent, Paper, Button } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
    fontFamily: 'Faustina',
  },
  paper: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    width: '50%',
    height: '50vh',
    fontFamily: 'Faustina',
  },
  icon: {
    color: 'green',
    width: 50,
    height: 50,
    marginTop: -10,
    marginBottom: 10
  },
  btn: {
    marginTop: 30,
    fontFamily: 'Faustina',
  }
}))
const SuccessOffer = () => {
  const classes = useStyles()
  const history = useHistory()
  const moveBack = () => {
    history.push("/")
  }
  const locale = useContext(localeContext)
  return (
    <div className={classes.root}>
      <Paper elevation={3} variant="outlined" rounded className={classes.paper} >
        <CardContent style={{ fontSize: 20, fontFamily: 'Faustina' }}>{getText("success_offer", "title", locale.lang)}</CardContent>
        <CheckCircleIcon className={classes.icon} />
        <div style={{ fontFamily: 'Faustina' }}>{getText("success_offer", "p1", locale.lang)}</div>
        <div style={{ fontFamily: 'Faustina' }}>{getText("success_offer", "p2", locale.lang)}</div>
        <Button onClick={moveBack} className={classes.btn} variant="contained" color='primary'>{getText("success_offer", "btn", locale.lang)}</Button>
      </Paper>
    </div>
  )
}
export default SuccessOffer
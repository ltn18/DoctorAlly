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
        marginBottom: 20
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
    }
}))

const SuccessVolunteer = () => {
    const classes = useStyles()
    const history = useHistory()
    const moveBack = () => {
        history.push("/")
    }
    const locale = useContext(localeContext)
    return (
        <div className={classes.root}>
            <Paper elevation={3} variant="outlined" rounded className={classes.paper} >
                <CardContent style={{fontSize: 20}}>{getText("success_volunteer", "title", locale.lang)}</CardContent>
                <CheckCircleIcon className={classes.icon}/>
                <div>{getText("success_volunteer", "p1", locale.lang)}</div>
                <div>{getText("success_volunteer", "p2", locale.lang)}</div>
                <Button onClick={moveBack} className={classes.btn} variant="contained" color='primary'>{getText("success_volunteer", "btn", locale.lang)}</Button>
            </Paper>
        </div>
    )
}

export default SuccessVolunteer
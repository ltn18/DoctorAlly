import React from 'react';
import { useHistory } from 'react-router-dom';
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

const SuccessOffer = () => {
    const classes = useStyles()
    const history = useHistory()
    const moveBack = () => {
        history.push("/")
    }
    return (
        <div className={classes.root}>
            <Paper elevation={3} variant="outlined" rounded className={classes.paper} >
                <CardContent style={{fontSize: 20}}>Awesome!</CardContent>
                <CheckCircleIcon className={classes.icon}/>
                <div>Your offer has been confirmed.</div>
                <div>You will get in touch with the doctor soon.</div>
                <Button onClick={moveBack} className={classes.btn} variant="contained" color='primary'>Return Home</Button>
            </Paper>
        </div>
    )
}

export default SuccessOffer
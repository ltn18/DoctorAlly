import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'hsl(0,20%,98%)',
    padding: '30px',
    marginBottom: 20,
  },
  personalInfo: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
  footer: {
    marginLeft: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    '& > *': {
      width: '30ch',
    },
  }
}));

const Feedbacks = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <form className={classes.root} noValidate autoComplete="off">
        <div style={{ marginBottom: 20 }}>
          <strong>DROP US A LINE</strong>
          <p style={{ fontStyle: 'italic' }}>We appreciate your feedbacks to us.
          Hope to work closely with you in the future</p>
        </div>
        <FormControl className={classes.personalInfo}>
          <FormLabel>Personal information</FormLabel>
          <TextField label="Your full name" variant="outlined" />
          <TextField label="Your email" variant="outlined" />
          <FormLabel>Feedback Section</FormLabel>
          <TextField
            label="Feedback Card"
            variant="outlined"
            multiline
            rows={6}
            name="feedback"
          />
        </FormControl>

        <FormControl className={classes.footer}>
          <TextField label="Your signature" style={{ marginRight: '10px' }} />
          <Button color="secondary" size="large" variant="contained" endIcon={<SendIcon />}>
            <strong>SEND</strong> 
          </Button>
        </FormControl>
      </form>
    </Container>
  )
}

export default Feedbacks;

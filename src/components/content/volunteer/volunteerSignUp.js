import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Button } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
  quote: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    fontStyle: 'italic'
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

const VolunteerSignUp = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <form className={classes.root} noValidate autoComplete="off">
        <div style={{ marginBottom: 20 }}>
          <strong>VOLUNTEER CARD</strong>
          <p style={{ fontStyle: 'italic' }}>We will contact you when there are requests near you.
          Your personal information is safe with us!</p>
        </div>
        <FormControl className={classes.formControl}>
          <FormLabel>What can you provide?</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Meals"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Drinks"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Masks"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Sanitizer hand wash"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Medical supplies"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Pet care"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Laundry"
            />
            <div>
              <FormControlLabel
                control={<Checkbox />}
                label="Other "
              />
              <TextField multiline />
            </div>
          </FormGroup>
        </FormControl>

        <FormControl className={classes.personalInfo}>
          <FormLabel>Personal information</FormLabel>
          <TextField label="Your full name" variant="outlined" />
          <TextField label="Your home district" variant="outlined" />
          <TextField label="Your home ward" variant="outlined" />
          <TextField label="Your home city" variant="outlined" />
          <TextField label="Your email" variant="outlined" />
          <TextField label="Your phone number" variant="outlined" />
        </FormControl>

        <FormControl className={classes.footer}>
          <TextField label="Your signature" style={{marginRight: '10px'}}/>
          <Button variant="contained" color="primary" size="large">Submit</Button>
        </FormControl>

        <div className={classes.quote}>
          <strong>
            “No one has ever become poor by giving.”
          </strong>
          <strong style={{ alignSelf: 'flex-end' }}>
            Anne Frank, diary of Anne Frank: the play
          </strong>
        </div>
      </form>
    </Container>
  )
}

export default VolunteerSignUp;
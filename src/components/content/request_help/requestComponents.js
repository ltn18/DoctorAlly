import React from 'react';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import { Button, ButtonGroup } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Requests = (props) => {
  const { formControl } = props;
  const history = useHistory();

  const moveToPage2 = () => {
    history.push("/request_help/2");
  }
  
  return (
    <FormControl className={formControl}>
      <FormLabel>What kinds of support do you need?</FormLabel>
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
      <TextField
        label="Describe your request"
        variant="outlined"
        multiline
        rows={6}
      />
      <div style={{ fontStyle: 'italic' }}>
        * If possible, please include details such as
        days or times of week you anticipate needing help, dietary restrictions,
        and anything else a helper might need to know.
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ButtonGroup
          style={{ marginTop: 20, }}
          color="secondary"
          aria-label="outlined secondary button group">
          <Button onClick={moveToPage2}>Next</Button>
        </ButtonGroup>
        <strong style={{ fontStyle: 'italic' }}>
          Page {<span style={{ color: '#ED4337' }}>1/2</span>}
        </strong>
      </div>
    </FormControl>
  )
}

const PersonalInformation = (props) => {
  const { personalInfo } = props;
  const history = useHistory();

  const moveToPage1 = () => {
    history.push("/request_help/1");
  }

  return (
    <>
      <FormControl className={personalInfo}>
        <FormLabel>Personal information</FormLabel>
        <TextField label="Your full name" variant="outlined" />
        <TextField label="Your location" variant="outlined" />
        <TextField label="Your medical facility" variant="outlined" />
        <TextField label="Your job title/ role" variant="outlined" />
        <TextField label="Your email" variant="outlined" />
        <TextField label="Your phone number" variant="outlined" />
      </FormControl>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ButtonGroup
          style={{ marginTop: 20, }}
          color="secondary"
          aria-label="outlined secondary button group">
          <Button onClick={moveToPage1}>Back</Button>
          <Button>Submit</Button>
        </ButtonGroup>
        <strong style={{ fontStyle: 'italic' }}>
          Page {<span style={{ color: '#00ff00' }}>2/2</span>}
        </strong>
      </div>
    </>
  )
}


export { PersonalInformation, Requests }
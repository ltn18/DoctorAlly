import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import { Button, ButtonGroup } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Data from './requestData';
import axios from "../../../config/axios"
const Requests = (props) => {
  const { formControl } = props;
  const history = useHistory();

  const handleSave = () => {
    Data[0] = state;
    history.push("/request_help/2/success")
    axios.post("http://localhost:5000/helpRequest",Data)
    .then((res)=> res.data)
    .catch((err)=>{
      console.log(err)
    })
  }

  const [state, setState] = useState(Data[0]);

  const { medicalSupplies, masks, sanitizer, meals, drinks, laundry, petCare, other, describeRequest } = state;

  const handleTickChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleTextChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  // console.log(state);

  const moveToPage1 = () => {
    history.push("/request_help/1");
  }

  return (
    <FormControl className={formControl}>
      <FormLabel>What kinds of support do you need?</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={medicalSupplies} onChange={handleTickChange} name="medicalSupplies" />}
          label="Medical supplies"
        />
        <FormControlLabel
          control={<Checkbox checked={masks} onChange={handleTickChange} name="masks" />}
          label="Masks"
        />
        <FormControlLabel
          control={<Checkbox checked={sanitizer} onChange={handleTickChange} name="sanitizer" />}
          label="Sanitizer hand wash"
        />
        <FormControlLabel
          control={<Checkbox checked={meals} onChange={handleTickChange} name="meals" />}
          label="Meals"
        />
        <FormControlLabel
          control={<Checkbox checked={drinks} onChange={handleTickChange} name="drinks" />}
          label="Drinks"
        />
        <FormControlLabel
          control={<Checkbox checked={laundry} onChange={handleTickChange} name="laundry" />}
          label="Laundry"
        />
        <FormControlLabel
          control={<Checkbox checked={petCare} onChange={handleTickChange} name="petCare" />}
          label="Pet care"
        />
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label="Other "
          />
          <TextField multiline name="other" value={other} onChange={handleTextChange} />
        </div>
      </FormGroup>
      <TextField
        label="Describe your request"
        variant="outlined"
        multiline
        rows={6}
        name="describeRequest"
        value={describeRequest}
        onChange={handleTextChange}
      />
      <div style={{ fontStyle: 'italic' }}>
        * If possible, please include details such as
        days or times of week you anticipate needing help, dietary restrictions,
        and anything else a helper might need to know.
            </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ButtonGroup
          style={{ marginTop: 20 }}
          color="secondary"
          aria-label="outlined secondary button group">
          <Button onClick={() => { moveToPage1(); handleSave() }}>Back</Button>
          <Button onClick={() => { handleSave(); }}>Submit</Button>
        </ButtonGroup>
        <strong style={{ fontStyle: 'italic' }}>
          Page {<span style={{ color: '#00ff00' }}>2/2</span>}
        </strong>
      </div>
    </FormControl>
  )
}

const PersonalInformation = (props) => {
  const { personalInfo } = props;
  const history = useHistory();

  const moveToPage2 = () => {
    history.push("/request_help/2");
  }

  const handleSave = () => {
    Data[1] = state;
  }

  const [state, setState] = useState(Data[1]);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const { fullName, location, medicalFacility, jobTitle, email, phone } = state;

  const moveToPage1 = () => {
    history.push("/request_help/1");
  }

  return (
    <>
      <FormControl className={personalInfo}>
        <FormLabel>Personal information</FormLabel>
        <TextField label="Your full name" name="fullName" variant="outlined" value={fullName} onChange={handleChange} />
        <TextField label="Your location" name="location" variant="outlined" value={location} onChange={handleChange} />
        <TextField label="Your medical facility" name="medicalFacility" variant="outlined" value={medicalFacility} onChange={handleChange} />
        <TextField label="Your job title/ role" name="jobTitle" variant="outlined" value={jobTitle} onChange={handleChange} />
        <TextField label="Your email" name="email" variant="outlined" value={email} onChange={handleChange} />
        <TextField label="Your phone number" name="phone" variant="outlined" value={phone} onChange={handleChange} />
      </FormControl>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ButtonGroup
          style={{ marginTop: 20, }}
          color="secondary"
          aria-label="outlined secondary button group">
          <Button onClick={() => { handleSave(); moveToPage2() }}>Next</Button>
        </ButtonGroup>
        <strong style={{ fontStyle: 'italic' }}>
          Page {<span style={{ color: '#ED4337' }}>1/2</span>}
        </strong>
      </div>
    </>
  )
}



export { PersonalInformation, Requests, Data }
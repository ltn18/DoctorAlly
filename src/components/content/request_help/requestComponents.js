import React, { useState, useContext } from 'react';
import localeContext, { getLongLineText } from '../../context/localeCtx';

import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import { Button, ButtonGroup, MenuItem, Select, InputLabel } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

import Data from './requestData';
import axios from "../../../config/axios"

const useStyles = makeStyles((theme) => ({
  font: {
    fontFamily: 'Faustina'
  },
}));

const Requests = (props) => {
  const { formControl } = props;
  const history = useHistory();
  const locale = useContext(localeContext);
  const classes = useStyles();

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
      <FormLabel className={classes.font}>{getLongLineText(locale.lang, "request_help", "support_kinds", "title")}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={medicalSupplies} onChange={handleTickChange} name="medicalSupplies" />}
          label={getLongLineText(locale.lang, "request_help", "support_kinds", "item1")}
        />
        <FormControlLabel
          control={<Checkbox checked={masks} onChange={handleTickChange} name="masks" />}
          label={getLongLineText(locale.lang, "request_help", "support_kinds", "item2")}
        />
        <FormControlLabel
          control={<Checkbox checked={sanitizer} onChange={handleTickChange} name="sanitizer" />}
          label={getLongLineText(locale.lang, "request_help", "support_kinds", "item3")}
        />
        <FormControlLabel
          control={<Checkbox checked={meals} onChange={handleTickChange} name="meals" />}
          label={getLongLineText(locale.lang, "request_help", "support_kinds", "item4")}
        />
        <FormControlLabel
          control={<Checkbox checked={drinks} onChange={handleTickChange} name="drinks" />}
          label={getLongLineText(locale.lang, "request_help", "support_kinds", "item5")}
        />
        <FormControlLabel
          control={<Checkbox checked={laundry} onChange={handleTickChange} name="laundry" />}
          label={getLongLineText(locale.lang, "request_help", "support_kinds", "item6")}
        />
        <FormControlLabel
          control={<Checkbox checked={petCare} onChange={handleTickChange} name="petCare" />}
          label={getLongLineText(locale.lang, "request_help", "support_kinds", "item7")}
        />
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label={getLongLineText(locale.lang, "request_help", "support_kinds", "item8")}
          />
          <TextField multiline name="other" value={other} onChange={handleTextChange} />
        </div>
      </FormGroup>
      <TextField
        label={getLongLineText(locale.lang, "request_help", "support_kinds", "request_placeholder")}
        variant="outlined"
        multiline
        rows={6}
        name="describeRequest"
        value={describeRequest}
        onChange={handleTextChange}
      />
      <div style={{ fontStyle: 'italic' }}>
        {getLongLineText(locale.lang, "request_help", "support_kinds", "notice")}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ButtonGroup
          style={{ marginTop: 20 }}
          color="secondary"
          variant="contained"
          aria-label="contained secondary button group">
          <Button
            style={{ fontFamily: 'Faustina' }}
            onClick={() => { moveToPage1(); handleSave() }}>
            {getLongLineText(locale.lang, "request_help", "footer", "back_button")}
          </Button>
          <Button
            style={{ fontFamily: 'Faustina' }}
            onClick={() => { 
              handleSave(); 
              console.log(Data);
              history.push("/request_help/2/success")
              }}>
            {getLongLineText(locale.lang, "request_help", "footer", "submit_button")}
          </Button>
        </ButtonGroup>
        <strong style={{ fontStyle: 'italic',  }}>
          {getLongLineText(locale.lang, "request_help", "page", null)}
          &nbsp;
          {<span style={{ color: '#00ff00' }}>2/2</span>}
        </strong>
      </div>
    </FormControl>
  )
}

const PersonalInformation = (props) => {
  const { personalInfo } = props;
  const history = useHistory();
  const classes = useStyles();
  const locale = useContext(localeContext);

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
        <FormLabel style={{ fontFamily: 'Faustina' }}>
          {getLongLineText(locale.lang, "request_help", "personal_info", "title")}
        </FormLabel>
        <TextField
          className={classes.font}
          label={getLongLineText(locale.lang, "request_help", "personal_info", "name_placeholder")}
          name="fullName"
          variant="outlined"
          value={fullName}
          onChange={handleChange}
        />
        <TextField
          label={getLongLineText(locale.lang, "request_help", "personal_info", "location_placeholder")}
          name="location"
          variant="outlined"
          value={location}
          onChange={handleChange}
        />
        <TextField
          label={getLongLineText(locale.lang, "request_help", "personal_info", "facility_placeholder")}
          name="medicalFacility"
          variant="outlined"
          value={medicalFacility}
          onChange={handleChange}
        />
        <TextField
          label={getLongLineText(locale.lang, "request_help", "personal_info", "role_placeholder")}
          name="jobTitle"
          variant="outlined"
          value={jobTitle}
          onChange={handleChange}
        />
        <TextField
          label={getLongLineText(locale.lang, "request_help", "personal_info", "email_placeholder")}
          name="email"
          variant="outlined"
          value={email}
          onChange={handleChange}
        />
        <TextField
          label={getLongLineText(locale.lang, "request_help", "personal_info", "phone_placeholder")}
          name="phone"
          variant="outlined"
          value={phone}
          onChange={handleChange}
        />
      </FormControl>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ButtonGroup
          style={{ marginTop: 20 }}
          color="secondary"
          variant="contained"
          aria-label="contained secondary button group">
          <Button
            style={{ fontFamily: 'Faustina' }}
            onClick={() => { moveToPage2(); handleSave() }}>
            {getLongLineText(locale.lang, "request_help", "footer", "next_button")}
          </Button>
        </ButtonGroup>
        <strong style={{ fontStyle: 'italic' }}>
          {getLongLineText(locale.lang, "request_help", "page", null)}
          &nbsp;
          {<span style={{ color: '#ED4337' }}>1/2</span>}
        </strong>
      </div>
    </>
  )
}



export { PersonalInformation, Requests, Data }
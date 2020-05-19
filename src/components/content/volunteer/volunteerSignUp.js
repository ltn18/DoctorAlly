import React, { useContext, useState } from 'react';
import localeContext, { getLongLineText } from '../../context/localeCtx';
import { useHistory } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Button } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios"
import Data from "./volunteerData"

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
    fontFamily: 'Faustina'
  },
  personalInfo: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
    fontFamily: 'Faustina'
  },
  quote: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    fontStyle: 'italic',
    fontFamily: 'Faustina'
  },
  footer: {
    marginLeft: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    '& > *': {
      width: '30ch',
    },
    fontFamily: 'Faustina'
  },
  font: {
    fontFamily: 'Faustina'
  },
}));

const VolunteerSignUp = () => {
  const classes = useStyles();
  const locale = useContext(localeContext)
  const [state0, setState0] = useState(Data[0]);
  const [state1, setState1] = useState(Data[1]);
  const history = useHistory()

  const submitHandler = () => {
    history.push("/volunteer/signUp/success")
    Data[0] = state0
    Data[1] = state1

    axios.post("http://202.92.6.90:5000/volunteer", Data)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err)
      })
  }

  const { meals, drinks, masks, sanitizer, medicalSupplies, petCare, laundry, other } = state0
  const { fullName, homeDistrict, homeWard, homeCity, email, phone, signature } = state1

  const handleTickChange = (event) => {
    setState0({ ...state0, [event.target.name]: event.target.checked });
  };

  const handleTextChange = (event) => {
    setState1({ ...state1, [event.target.name]: event.target.value });
  };

  const StyledFormControlLabel = withStyles({
    font: {
      fontFamily: 'Faustina'
    },
  })(FormControlLabel)

  return (
    <Container maxWidth="md">
      <form className={classes.root} noValidate autoComplete="off">
        <div style={{ marginBottom: 20 }}>
          <strong>{getLongLineText(locale.lang, 'volunteerSignUp', 'title', null)}</strong>
          <p style={{ fontStyle: 'italic' }}>{getLongLineText(locale.lang, 'volunteerSignUp', 'description', null)}</p>
        </div>
        <FormControl className={classes.formControl}>
          <FormLabel classes={{
            root: classes.font
          }} >{getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'title')}</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={meals} onChange={handleTickChange} name="meals" />}
              label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item1')}
            />
            <FormControlLabel
              control={<Checkbox checked={drinks} onChange={handleTickChange} name="drinks" />}
              label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item2')}
            />
            <FormControlLabel
              control={<Checkbox checked={masks} onChange={handleTickChange} name="masks" />}
              label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item3')}
            />
            <FormControlLabel
              control={<Checkbox checked={sanitizer} onChange={handleTickChange} name="sanitizer" />}
              label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item4')}
            />
            <FormControlLabel
              control={<Checkbox checked={medicalSupplies} onChange={handleTickChange} name="medicalSupplies" />}
              label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item5')}
            />
            <FormControlLabel
              control={<Checkbox checked={petCare} onChange={handleTickChange} name="petCare" />}
              label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item6')}
            />
            <FormControlLabel
              control={<Checkbox checked={laundry} onChange={handleTickChange} name="laundry" />}
              label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item7')}
              classes={{ font: classes.font }}
            />
            <div>
              <FormControlLabel
                control={<Checkbox checked={other} onChange={handleTickChange} name="other" />}
                label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item8')}
              />
              <TextField multiline />
            </div>
          </FormGroup>
        </FormControl>

        <FormControl className={classes.personalInfo}>
          <FormLabel className={classes.font}>{getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'title')}</FormLabel>
          <TextField name="fullName" value={fullName} onChange={handleTextChange} classes={classes.font} label={getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'name_placeholder')} variant="outlined" />
          <TextField name="homeDistrict" value={homeDistrict} onChange={handleTextChange} label={getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'district_placeholder')} variant="outlined" />
          <TextField name="homeWard" value={homeWard} onChange={handleTextChange} label={getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'ward_placeholder')} variant="outlined" />
          <TextField name="homeCity" value={homeCity} onChange={handleTextChange} label={getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'city_placeholder')} variant="outlined" />
          <TextField name="email" value={email} onChange={handleTextChange} label={getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'email_placeholder')} variant="outlined" />
          <TextField name="phone" value={phone} onChange={handleTextChange} label={getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'phone_placeholder')} variant="outlined" />
        </FormControl>

        <FormControl className={classes.footer}>
          <TextField name="signature" value={signature} onChange={handleTextChange} label={getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'signature_placeholder')} style={{ marginRight: '10px' }} />
          <Button onClick={submitHandler} className={classes.font} variant="contained" color="primary" size="large">{getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'submit_button')}</Button>
        </FormControl>

        <div className={classes.quote}>
          <strong>
            {getLongLineText(locale.lang, 'volunteerSignUp', 'footer', 'quote')}
          </strong>
          <strong style={{ alignSelf: 'flex-end' }}>
            {getLongLineText(locale.lang, 'volunteerSignUp', 'footer', 'author')}
          </strong>
        </div>
      </form>
    </Container>
  )
}

export default VolunteerSignUp;

import React, { useContext, useState } from 'react';
import localeContext, { getLongLineText } from '../../context/localeCtx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Button } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import { useHistory, useParams } from 'react-router-dom';
import Data from "../volunteer/volunteerData"
import axios from "axios"

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
  },
  font: {
    fontFamily: 'Lexend Giga',
  },
}));

const OfferHelp = () => {
  const classes = useStyles();
  const {id} = useParams()
  const locale = useContext(localeContext)
  const history = useHistory();

  const [state1, setState1] = useState(Data[1]);
  const { fullName, homeDistrict,homeWard, homeCity, email, phone, signature} = state1

  const submitHandler = () =>{
    Data[1] = state1
    history.push(`/offer_help/${id}/success`)

    axios.post("http://202.92.6.90:5000/volunteer",Data)
    .then((res)=> res.data)
    .catch((err)=>{
      console.log(err)
    })
  }

  const handleTextChange = (event) => {
    setState1({ ...state1, [event.target.name]: event.target.value, idDoctor:id });
  };

  
  return (
    <Container maxWidth="md">
      <form className={classes.root} noValidate autoComplete="off">
        <div style={{ marginBottom: 20 }}>
          <strong>{getLongLineText(locale.lang, 'offer_help', 'title', null)}</strong>
          <p style={{ fontStyle: 'italic' }}>{getLongLineText(locale.lang, 'offer_help', 'description', null)}</p>
        </div>
        <FormControl className={classes.personalInfo}>
          <FormLabel className={classes.font}>{getLongLineText(locale.lang, 'offer_help', 'personal_info', 'title')}</FormLabel>
          <TextField name="fullName" value={fullName} onChange={handleTextChange} classes={classes.font} label={getLongLineText(locale.lang, 'offer_help', 'personal_info', 'name_placeholder')} variant="outlined" />
          <TextField name="homeDistrict" value={homeDistrict} onChange={handleTextChange} label={getLongLineText(locale.lang, 'offer_help', 'personal_info', 'district_placeholder')} variant="outlined" />
          <TextField name="homeWard" value={homeWard} onChange={handleTextChange} label={getLongLineText(locale.lang, 'offer_help', 'personal_info', 'ward_placeholder')} variant="outlined" />
          <TextField name="homeCity" value={homeCity} onChange={handleTextChange} label={getLongLineText(locale.lang, 'offer_help', 'personal_info', 'city_placeholder')} variant="outlined" />
          <TextField name="email" value={email} onChange={handleTextChange} label={getLongLineText(locale.lang, 'offer_help', 'personal_info', 'email_placeholder')} variant="outlined" />
          <TextField name="phone" value={phone} onChange={handleTextChange} label={getLongLineText(locale.lang, 'offer_help', 'personal_info', 'phone_placeholder')} variant="outlined" />
        </FormControl>

        <FormControl className={classes.footer}>
          <TextField name="signature" value={signature} onChange={handleTextChange} label={getLongLineText(locale.lang, 'offer_help', 'personal_info', 'signature_placeholder')} style={{ marginRight: '10px' }} />
          <Button className={classes.font} variant="contained" color="secondary" size="large" onClick={submitHandler}>{getLongLineText(locale.lang, 'offer_help', 'personal_info', 'submit_button')}</Button>
        </FormControl>

        <div className={classes.quote}>
          <strong>
            {getLongLineText(locale.lang, 'offer_help', 'footer', 'quote')}
          </strong>
          <strong style={{ alignSelf: 'flex-end' }}>
            {getLongLineText(locale.lang, 'offer_help', 'footer', 'author')}
          </strong>
        </div>
      </form>
    </Container>
  )
}

export default OfferHelp;

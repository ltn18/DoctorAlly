import React, { useContext } from 'react';
import localeContext, { getLongLineText } from '../../context/localeCtx';
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
  },
  font: {
    fontFamily: 'Lexend Giga',
  },
}));

const VolunteerSignUp = () => {
  const classes = useStyles();
  const locale = useContext(localeContext)

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
              control={<Checkbox />}
              label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item1')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item2')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item3')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item4')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item5')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item6')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item7')}
            />
            <div>
              <FormControlLabel
                control={<Checkbox />}
                label={getLongLineText(locale.lang, 'volunteerSignUp', 'support_kinds', 'item8')}
              />
              <TextField multiline />
            </div>
          </FormGroup>
        </FormControl>

        <FormControl className={classes.personalInfo}>
          <FormLabel className={classes.font}>{getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'title')}</FormLabel>
          <TextField classes={classes.font} label={getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'name_placeholder')} variant="outlined" />
          <TextField label={getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'district_placeholder')} variant="outlined" />
          <TextField label={getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'ward_placeholder')} variant="outlined" />
          <TextField label={getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'city_placeholder')} variant="outlined" />
          <TextField label={getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'email_placeholder')} variant="outlined" />
          <TextField label={getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'phone_placeholder')} variant="outlined" />
        </FormControl>

        <FormControl className={classes.footer}>
          <TextField label={getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'signature_placeholder')} style={{ marginRight: '10px' }} />
          <Button className={classes.font} variant="contained" color="primary" size="large">{getLongLineText(locale.lang, 'volunteerSignUp', 'personal_info', 'submit_button')}</Button>
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

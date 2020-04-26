import React, { useContext } from 'react';
import localeContext, { getLongLineText } from '../../../context/localeCtx';

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
    fontFamily: 'Faustina'
  },
  personalInfo: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
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
  }
}));

const Feedbacks = () => {
  const classes = useStyles();
  const locale = useContext(localeContext);

  return (
    <Container maxWidth="md">
      <form className={classes.root} noValidate autoComplete="off">
        <div style={{ marginBottom: 20 }}>
          <strong>{getLongLineText(locale.lang, "feedbacks", "title", null)}</strong>
          <p style={{ fontStyle: 'italic' }}>{getLongLineText(locale.lang, "feedbacks", "description", null)}</p>
        </div>
        <FormControl className={classes.personalInfo}>
          <FormLabel style={{ fontFamily: 'Faustina' }}>{getLongLineText(locale.lang, "feedbacks", "personal_info", "title")}</FormLabel>
          <TextField
            label={getLongLineText(locale.lang, "feedbacks", "personal_info", "name_placeholder")}
            variant="outlined"
          />
          <TextField
            label={getLongLineText(locale.lang, "feedbacks", "personal_info", "email_placeholder")}
            variant="outlined"
          />
          <FormLabel style={{ fontFamily: 'Faustina' }}>{getLongLineText(locale.lang, "feedbacks", "feedback_section", "title")}</FormLabel>
          <TextField
            label={getLongLineText(locale.lang, "feedbacks", "feedback_section", "placeholder")}
            variant="outlined"
            multiline
            rows={6}
            name="feedback"
          />
        </FormControl>

        <FormControl className={classes.footer}>
          <TextField
            label={getLongLineText(locale.lang, "feedbacks", "footer", "signature_placeholder")}
            style={{ marginRight: '10px' }}
          />
          <Button color="secondary" size="large" variant="contained" endIcon={<SendIcon />}>
            <strong style={{ fontFamily: 'Faustina' }}>{getLongLineText(locale.lang, "feedbacks", "footer", "button")}</strong>
          </Button>
        </FormControl>
      </form>
    </Container>
  )
}

export default Feedbacks;
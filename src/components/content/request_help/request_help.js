import React, { useContext } from 'react';
import localeContext, { getLongLineText } from '../../context/localeCtx';
import { useParams, Redirect } from 'react-router-dom';
import { PersonalInformation, Requests } from './requestComponents';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
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
    fontFamily: 'Faustina',
  },
  personalInfo: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
    fontFamily: 'Faustina',
  },
  quote: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    fontStyle: 'italic',
    fontFamily: 'Faustina',
  },
}));
const RequestForm = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const locale = useContext(localeContext);
  return (
    <Container maxWidth="md">
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.font} style={{ marginBottom: 20 }}>
          <strong>{getLongLineText(locale.lang, "request_help", "title", null)}</strong>
          <p style={{ fontStyle: 'italic', fontFamily: 'Faustina' }}>{getLongLineText(locale.lang, "request_help", "description", null)}</p>
        </div>
        {id === "1"
          ? <PersonalInformation
            personalInfo={classes.personalInfo}
          />
          : id === "2"
            ? <Requests FormControl={classes.formControl} />
            : <Redirect to="/request_help/1" />
        }
      </form>
    </Container>
  )
}
export default RequestForm;
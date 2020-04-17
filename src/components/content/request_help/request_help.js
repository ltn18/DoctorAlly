import React from 'react';

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
}));

const RequestForm = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  console.log(id);

  return (
    <Container maxWidth="md">
      <form className={classes.root} noValidate autoComplete="off">
        <div style={{ marginBottom: 20 }}>
          <strong>REQUEST CARD</strong>
          <p style={{ fontStyle: 'italic' }}>Let us help you get what you need!</p>
        </div>
        {id === "1"
          ? <Requests FormControl={classes.formControl} />
          : id === "2"
            ? <PersonalInformation
              personalInfo={classes.personalInfo}
            />
            : <Redirect to="/request_help/1" />
        }

      </form>
    </Container>
  )


}

export default RequestForm;

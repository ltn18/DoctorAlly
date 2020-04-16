import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Volunteer = () => {
  const history = useHistory();
  const moveToSignUp = () => {
    history.push("/volunteer/signup");
  }

  return (
    <div>
      <Button onClick={ moveToSignUp } color="primary" variant="outlined">Volunteer Now</Button>
    </div>
  )
}

export default Volunteer

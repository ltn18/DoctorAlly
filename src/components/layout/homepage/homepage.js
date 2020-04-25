import React from 'react';
import ReactPlayer from 'react-player';
import { Container } from '@material-ui/core';

// import { About } from '../../content/index';
import ToHeaders from './toComponents';

const HomePage = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ alignSelf: 'center' }}>LET'S WALKTHROUGH DOCTORALLY</h2>
      <Container maxWidth="lg">
        <ReactPlayer
          width={1170}
          height={550}
          url='https://youtu.be/VaKzNtwPQxE'
          playing
          controls
          style={{ alignSelf: 'center', marginTop: '20px' }}
        />
      </Container>
      <ToHeaders />
    </div>
  )
}

export default HomePage

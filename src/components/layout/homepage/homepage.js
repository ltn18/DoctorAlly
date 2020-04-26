import React from 'react';
import ReactPlayer from 'react-player';
import { Container } from '@material-ui/core';

// import { About } from '../../content/index';
import ToHeaders from './toComponents';

const HomePage = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* <div style={{ alignSelf: 'center', fontSize: '20px', fontWeight: 'bold', marginTop: "20px", }}>LET'S WALKTHROUGH DOCTORALLY</div> */}
      <Container maxWidth="lg">
        <ReactPlayer
          width={1170}
          height={550}
          url='https://www.youtube.com/watch?v=mrRgBTOIPgA'
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

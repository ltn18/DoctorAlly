import React from 'react';
import ReactPlayer from 'react-player';
import { Container } from '@material-ui/core';

import { About } from '../../content/index';
import ToHeaders from './toComponents';

const HomePage = () => {

  return (
    <div>
      <Container maxWidth="lg">
        <ReactPlayer
          width={1170}
          height={550}
          url='https://youtu.be/VaKzNtwPQxE'
          playing
          muted
          controls
          style={{ alignSelf: 'center', marginTop: '20px' }}
        />
      </Container>
      <ToHeaders />
      <About />
    </div>
  )
}

export default HomePage

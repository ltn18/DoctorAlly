import React from 'react';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';

import { Container, makeStyles, Button } from '@material-ui/core';
import { About } from './content/index';

const useStyles = makeStyles(() => ({
  direct: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
  },
  directItem: {
    padding: '20px',
    backgroundColor: '#f2f2f2',
    width: '600px',
    height: '48vh',
  }
}));


const ToReqHelp = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.directItem} style={{ borderLeft: '6px solid #F50057' }}>
      <strong style={{ fontSize: '25px', color: '#F50057' }}>REQUEST HELP</strong>
      <p style={{ wordWrap: 'break-word', marginTop: '20px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec cursus erat at est tristique viverra.
        Nunc tincidunt mauris odio, id finibus nisi bibendum eget.
        Ut vulputate semper molestie.
        Fusce semper egestas urna at ultrices.
        Nam quam mi, hendrerit posuere neque id, dictum euismod dui.
        Integer pellentesque leo ac lectus dictum finibus.
        Aenean vehicula faucibus accumsan.
        Integer pulvinar faucibus enim in scelerisque.
        Praesent sed leo id arcu malesuada rhoncus.
        Fusce nec fermentum ipsum.
      </p>
      <Button
        style={{ marginTop: '20px', fontWeight: 'bold', color: 'white' }}
        color="secondary"
        variant="contained"
        size="large"
        onClick={() => history.push("/request_help")}
      >
        REQUEST HELP NOW
      </Button>
    </div>
  )
}

const ToVolunteer = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.directItem} style={{ borderLeft: '6px solid #3F51B5' }}>
      <strong style={{ fontSize: '25px', color: '#3F51B5' }}>VOLUNTEER</strong>
      <p style={{ wordWrap: 'break-word', marginTop: '20px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec cursus erat at est tristique viverra.
        Nunc tincidunt mauris odio, id finibus nisi bibendum eget.
        Ut vulputate semper molestie.
        Fusce semper egestas urna at ultrices.
        Nam quam mi, hendrerit posuere neque id, dictum euismod dui.
        Integer pellentesque leo ac lectus dictum finibus.
        Aenean vehicula faucibus accumsan.
        Integer pulvinar faucibus enim in scelerisque.
        Praesent sed leo id arcu malesuada rhoncus.
        Fusce nec fermentum ipsum.
      </p>
      <Button
        style={{ marginTop: '20px', fontWeight: 'bold', color: 'white' }}
        color="primary"
        variant="contained"
        size="large"
        onClick={() => history.push("/volunteer")}
      >
        VOLUNTEER NOW
      </Button>
    </div>
  )
}

const HomePage = () => {
  const classes = useStyles();

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
        <div className={classes.direct}>
          <ToVolunteer />
          <ToReqHelp />
        </div>
      </Container>
      <About />
    </div>
  )
}

export default HomePage

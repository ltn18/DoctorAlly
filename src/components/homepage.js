import React from 'react';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';

import { Container, makeStyles, Button } from '@material-ui/core';
import { About } from './content/index';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    margin: 20,
    marginTop: '0px',
    marginBottom: '0px',
    width: 345,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  h2: {
    marginTop: '30px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  p: {
    marginBottom: '15px'
  },

  direct: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '40px',
  },
  directItem: {
    padding: '20px',
    width: '600px',
    height: '51vh',
  },

}));


const ToReqHelp = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.directItem}>
      <strong style={{ fontSize: '25px', color: '#F50057' }}>REQUEST HELP</strong>
      <p style={{ wordWrap: 'break-word', marginTop: '15px' }}>
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
        style={{ marginTop: '5px', fontWeight: 'bold', color: 'white' }}
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
    <div className={classes.directItem}>
      <strong style={{ fontSize: '25px', color: '#3F51B5' }}>VOLUNTEER</strong>
      <p style={{ wordWrap: 'break-word', marginTop: '15px' }}>
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
        style={{ marginTop: '5px', fontWeight: 'bold', color: 'white' }}
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

const ToHeaders = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className={classes.root}>
          <h2 className={classes.h2} style={{ borderTop: '1px solid #008000', borderBottom: '1px solid #008000', padding: '15px', color: '#008000' }}> Nearby Stores </h2>
          <Container className={classes.container}>
            <p className={classes.p}>
              We’re currently setting up networks of doctors and volunteers with an aim to fight against Covid-19.
              Your help will greatly contribute to this fight and our community as a whole.
              Sign up as a volunteer now and receive notifications when new requests are posted!
          </p>
            <Button onClick={() => history.push("/supply_stores")} size="large" style={{ backgroundColor: '#008000', color: 'white', fontWeight: 'bold' }} variant="contained" className={classes.button}>Nearby Stores</Button>
          </Container>
        </div>
        <div className={classes.root}>
          <h2 className={classes.h2} style={{ borderTop: '1px solid #8134AF', borderBottom: '1px solid #8134AF', padding: '15px', color: '#8134AF' }}> Covid-19 Data </h2>
          <Container className={classes.container}>
            <p className={classes.p}>
              We’re currently setting up networks of doctors and volunteers with an aim to fight against Covid-19.
              Your help will greatly contribute to this fight and our community as a whole.
              Sign up as a volunteer now and receive notifications when new requests are posted!
          </p>
            <Button onClick={() => history.push("/covid19_data")} size="large" style={{ backgroundColor: '#8134AF', color: 'white', fontWeight: 'bold' }} variant="contained" className={classes.button}>Covid-19 Data</Button>
          </Container>
        </div>
        <div className={classes.root}>
          <h2 className={classes.h2} style={{ borderTop: '1px solid #F77737', borderBottom: '1px solid #F77737', padding: '15px', color: '#F77737' }}> Learn More </h2>
          <Container className={classes.container}>
            <p className={classes.p}>
              We’re currently setting up networks of doctors and volunteers with an aim to fight against Covid-19.
              Your help will greatly contribute to this fight and our community as a whole.
              Sign up as a volunteer now and receive notifications when new requests are posted!
          </p>
            <Button onClick={() => history.push("/how_it_works")} size="large" style={{ backgroundColor: '#F77737', color: 'white', fontWeight: 'bold' }} variant="contained" className={classes.button}>Learn More</Button>
          </Container>
        </div>
      </div>
    </Container>
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
      <ToHeaders />
      <About />
    </div>
  )
}

export default HomePage

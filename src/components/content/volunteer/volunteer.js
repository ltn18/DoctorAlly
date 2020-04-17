import React, { useState } from 'react';
import { Button, Container, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  h2: {
    marginTop: 50
  },
  container: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    height: '50vh',
    width: '100ch',
    marginTop: '10px',
    padding: 10,
  },
  p: {
    fontSize: 20,
    marginBottom: 30
  },
  button: {
    width: '25ch',
    height: '100px',
    fontSize: 20
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: '100ch',
  },
  iconButton: {
    marginLeft: 80,
    padding: 10,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    width: '100ch',
  },
  grid: {
    display: 'flex',
    justifiedContent: 'center',
    margin: 10
  }
}));

const data = [
  {
    id: 1,
    work: ['Shopping', 'Cooking'],
    offers: 0,
  },
  {
    id: 2,
    work: ['Shopping'],
    offers: 3,
  },
  {
    id: 3,
    work: ['Special chores'],
    offers: 3,
  }
]

const RequestBox = (props) => {
  const { color, id, work, offers, addedReq } = props;
  const classes = useStyles();
  const [added, setAdded] = useState(false);
  const handleAdd = () => { setAdded(!added); };
  const handleRemove = () => { setAdded(!added); };
  return (
    <Box className={classes.box} style={{ backgroundColor: props.color }}>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={6}>
          <div>Request {props.id}</div>
          <div>{props.work.join(", ")}</div>
        </Grid>
        <Grid item xs={6}>{props.offers} offers</Grid>
      </Grid>
      {added
        ? <Button onClick={handleRemove} style={{ color: 'red' }}><RemoveCircleIcon /></Button>
        : <Button onClick={handleAdd} style={{ color: 'green' }}><AddCircleIcon /></Button>
      }
    </Box>
  )
}

const Volunteer = () => {
  const history = useHistory();
  const classes = useStyles();
  const moveToSignUp = () => {
    history.push("/volunteer/signup");
  }

  const [numReq, setNumReq] = useState(0);

  return (
    <>
      <div className={classes.root}>
        <h2 className={classes.h2}> BE A VOLUNTEER </h2>
        <Container className={classes.container}>
          <p className={classes.p}>Sign up as a volunteer and you will get notifications when new help requests are posted!</p>
          <Button onClick={moveToSignUp} color="primary" variant="outlined" className={classes.button}>Volunteer Now</Button>
        </Container>
      </div>
      <div className={classes.root}>
        <h2 className={classes.h2}>REQUEST LISTS</h2>
        <span style={{ fontStyle: 'italic' }}>Added Requests: {numReq}</span>
        <div style={{ display: 'flex' }}>
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            style={{ alignSelf: 'center' }}
            className={classes.input}
            placeholder="Search Requests"
            inputProps={{ 'aria-label': 'search requests' }}
          />
        </div>
        <div className='requests-container'>
          {
            data.map((box, id) => {
              if (id % 2 === 0) {
                return <RequestBox color='#f2f2f2' id={data[id].id} work={data[id].work} offers={data[id].offers} />
              } else {
                return <RequestBox color='#ffffff' id={data[id].id} work={data[id].work} offers={data[id].offers} />
              }
            })
          }

        </div>
      </div>
    </>
  )
}

export default Volunteer

import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import localeContext, { getText } from '../../context/localeCtx';
import { Button,ButtonGroup, Container, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';
// import IconButton from '@material-ui/core/IconButton';


const fetchDataReq = async () =>{
  const response = await fetch("http://202.92.6.90:5000/helpRequest")
  const resJson = await response.json()
  return resJson
}

const fetchDataVolunteer = async () =>{
  const response = await fetch("http://202.92.6.90:5000/volunteer")
  const resJson = await response.json()
  return resJson
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    fontFamily: 'Faustina',
  },
  h2: {
    marginTop: 50,
    fontFamily: 'Faustina',
  },
  container: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    height: '30vh',
    width: '100%',
    marginTop: '10px',
    padding: 10,
  },
  p: {
    fontSize: 20,
    marginBottom: 30,
    alignSelf: 'center',
    fontStyle: 'italic',
  },
  button: {
    width: '25ch',
    height: '100px',
    fontSize: 20,
    fontFamily: 'Faustina',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: '100ch',
    fontFamily: 'Faustina',
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
    "&:hover": {
      cursor: 'pointer'
    },
    fontFamily: 'Faustina',
  },
  grid: {
    display: 'flex',
    justifiedContent: 'center',
    margin: 10,
  },
  font: {
    fontFamily: 'Faustina',
  },
}));


const RequestBox = (props) => {
  const { color, id, work, offers } = props;
  const history = useHistory();
  const classes = useStyles();

  const handleBoxClick = () => {
    history.push(`requests/${id}`);
  }

  return (
    <Box onClick={handleBoxClick} className={classes.box} style={{ backgroundColor: props.color }}>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={6}>
          <strong>{props.name} | {props.role}, {props.facility}</strong>
          <div>{
          work.map((wor)=> {
            return wor + ", "
          })  
            }</div>
        </Grid>
        {/* <Grid item xs={6}>{props.offers} offers</Grid> */}
      </Grid>
    </Box>
  )
}

const Volunteer = () => {
  const history = useHistory();
  const classes = useStyles();
  const locale = useContext(localeContext);
  const [page, setPage] = useState(0);
  const rows = 5;
  const moveToSignUp = () => {
    history.push("/volunteer/signup");
  }
  const [requestData, setRequestData] = useState([])
  const [invalidate,setInvalidate] = useState(true)

  useEffect(() => {
    if(invalidate){
      fetchDataReq()
        .then((res)=>{
          setRequestData(res)
          setInvalidate(false) 
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  }, [invalidate]);
  
  const handleNextButtonClick = () => {
    if (page * rows < requestData.length) {
      setPage(page + 1);
    }
    console.log(page);
  };
  const handleBackButtonClick = () => {
    if (page > 0) {
      setPage(page - 1);
    }
    console.log(page);
  };

  const RenderButton = (props) => {
    const locale = useContext(localeContext);
    const { page, rows } = props;
    return (
      <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'row', justifyContent: 'center', fontFamily: 'Faustina' }}>
        <div>
          {
            page > 0 && page * rows + rows <= requestData.length
              ?
              <>
                <ButtonGroup variant="contained" aria-label="text primary button group">
                  <Button
                    style={{ backgroundColor: '#E1306C', color: 'white' }}
                    onClick={handleBackButtonClick}
                  >
                    {getText("volunteer", "back_button", locale.lang)}
                  </Button>
                  <Button
                    style={{ backgroundColor: '#53A653', color: 'white' }}
                    onClick={handleNextButtonClick}
                  >
                    {getText("volunteer", "next_button", locale.lang)}
                  </Button>
                </ButtonGroup>
              </>
              : page === 0
                ?
                <>
                  <Button
                    style={{ backgroundColor: '#53A653', color: 'white', fontFamily: 'Faustina' }}
                    variant="contained"
                    color="primary"
                    onClick={handleNextButtonClick}
                  >
                    {getText("volunteer", "next_button", locale.lang)}
                  </Button>
                </>
                : <Button
                  style={{ backgroundColor: '#E1306C', color: 'white', fontFamily: 'Faustina' }}
                  variant="contained"
                  color="primary"
                  onClick={handleBackButtonClick}
                >
                  {getText("volunteer", "back_button", locale.lang)}
                </Button>
          }
        </div>
        <strong style={{ marginLeft: '50px', alignSelf: 'center' }}>Page: {page + 1}/{page === 0? 1 : Math.ceil(requestData.length / rows)}</strong>
      </div>
    )
  }

  // const [searchValue, setSearchValue] = useState("");
  // const handleSearchChange = (e) => {
  //   setSearchValue(e.target.value);
  // }

  return (
    <>
      <div className={classes.root}>
        <h2 className={classes.h2}> {getText("volunteer", "h2_volunteer", locale.lang)} </h2>
        <Container className={classes.container}>
          <p className={classes.p}>
            {getText("volunteer", "p", locale.lang)}
          </p>
          <Button onClick={moveToSignUp} style={{backgroundColor: "#3f51b5", color: 'white'}} variant="contained" className={classes.button}> {getText("volunteer", "button", locale.lang)}</Button>
        </Container>
      </div>
      <div className={classes.root}>
        <h2 className={classes.h2}>{getText("volunteer", "h2_request", locale.lang)}</h2>
        <div className='requests-container'>
          {
            requestData.map((req, index) => {
              if (index % 2 === 0) {
                return (
                  <RequestBox
                    color='#f2f2f2'
                    id={req._id}
                    name={req.fullName}
                    role={req.jobTitle}
                    facility={req.medicalFacility}
                    work={req.work}
                  />
                )
              } else {
                return (
                  <RequestBox
                    color='#ffffff'
                    id={req._id}
                    name={req.fullName}
                    role={req.jobTitle}
                    facility={req.medicalFacility}
                    work={req.work}
                  />
                )
              }
            })
          }
          <RenderButton page={page} rows={rows} />
        </div>
      </div>
    </>
  )
}

export default Volunteer

import React, { useState, useContext } from 'react';
import localeContext, { getText } from '../../context/localeCtx';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Container, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';


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
    height: '28vh',
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
    fontFamily: 'Lexend Giga',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: '100ch',
    fontFamily: 'Lexend Giga',
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
    }
  },
  grid: {
    display: 'flex',
    justifiedContent: 'center',
    margin: 10
  },
  font: {
    fontFamily: 'Lexend Giga',
  },
}));

const DATA = [
  {
    id: 1,
    name: "An Nguyen",
    role: "Doctor",
    facility: "Benh vien Hong Ngoc",
    needs: ['Shopping', 'Cooking'],
    offers: 1,
  },
  {
    id: 2,
    name: "Binh Nguyen",
    role: "Surgeon",
    facility: "Bach Mai",
    needs: ['Shopping'],
    offers: 2,
  },
  {
    id: 3,
    name: "Chris Dev",
    role: "Nurse",
    facility: "Vin Mec",
    needs: ['Special chores'],
    offers: 3,
  },
  {
    id: 4,
    name: "Chris Dev",
    role: "Nurse",
    facility: "Vin Mec",
    needs: ['Special chores'],
    offers: 4,
  },
  {
    id: 5,
    name: "Chris Dev",
    role: "Nurse",
    facility: "Vin Mec",
    needs: ['Special chores'],
    offers: 5,
  },
  {
    id: 6,
    name: "Chris Dev",
    role: "Nurse",
    facility: "Vin Mec",
    needs: ['Special chores'],
    offers: 6,
  },
  {
    id: 7,
    name: "Chris Dev",
    role: "Nurse",
    facility: "Vin Mec",
    needs: ['Special chores'],
    offers: 7,
  },
  {
    id: 8,
    name: "Chris Dev",
    role: "Nurse",
    facility: "Vin Mec",
    needs: ['Special chores'],
    offers: 4,
  },
  {
    id: 9,
    name: "Chris Dev",
    role: "Nurse",
    facility: "Vin Mec",
    needs: ['Special chores'],
    offers: 5,
  },
  {
    id: 10,
    name: "Chris Dev",
    role: "Nurse",
    facility: "Vin Mec",
    needs: ['Special chores'],
    offers: 6,
  },
  {
    id: 11,
    name: "Chris Dev",
    role: "Nurse",
    facility: "Vin Mec",
    needs: ['Special chores'],
    offers: 7,
  }
]

const RequestBox = (props) => {
  const { color, id, needs, offers } = props;
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
          <div>{props.needs.join(", ")}</div>
        </Grid>
        <Grid item xs={6}>{props.offers} offers</Grid>
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

  const handleNextButtonClick = () => {
    if (page * rows < DATA.length) {
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
      <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div>
          {
            page > 0 && page * rows + rows <= DATA.length
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
                    style={{ backgroundColor: '#53A653', color: 'white' }}
                    variant="contained"
                    color="primary"
                    onClick={handleNextButtonClick}
                  >
                    {getText("volunteer", "next_button", locale.lang)}
                  </Button>
                </>
                : <Button
                  style={{ backgroundColor: '#E1306C', color: 'white' }}
                  variant="contained"
                  color="primary"
                  onClick={handleBackButtonClick}
                >
                  {getText("volunteer", "back_button", locale.lang)}
                </Button>
          }
        </div>
        <strong style={{ marginLeft: '50px', alignSelf: 'center' }}>Page: {page + 1}/{Math.ceil(DATA.length / rows)}</strong>
      </div>
    )
  }

  console.log(DATA.slice(page * rows, page * rows + rows));

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
          <Button onClick={moveToSignUp} color="primary" variant="contained" className={classes.button}> {getText("volunteer", "button", locale.lang)}</Button>
        </Container>
      </div>
      <div className={classes.root}>
        <h2 className={classes.h2}>{getText("volunteer", "h2_request", locale.lang)}</h2>
        {/* <div style={{ display: 'flex' }}>
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            style={{ alignSelf: 'center' }}
            className={classes.input}
            placeholder={getText("volunteer", "search_bar", locale.lang)}
            inputProps={{ 'aria-label': 'search requests' }}
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div> */}
        <div className='requests-container'>
          {
            DATA
              .slice(page * rows, page * rows + rows)
              .map((box) => {
                if (box.id % 2 === 0) {
                  return (
                    <RequestBox
                      color='#f2f2f2'
                      id={box.id}
                      name={box.name}
                      role={box.role}
                      facility={box.facility}
                      needs={box.needs}
                      offers={box.offers}
                    />
                  )
                } else {
                  return (
                    <RequestBox
                      color='#ffffff'
                      id={box.id}
                      name={box.name}
                      role={box.role}
                      facility={box.facility}
                      needs={box.needs}
                      offers={box.offers}
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

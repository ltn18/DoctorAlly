import React, { useState } from 'react';

import { Button, ButtonGroup, InputBase } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '30px',
    marginTop: '30px'
  },
  container: {
    maxHeight: 800,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: '100%',
  },
  searchRes: {
    backgroundColor: '#FEDA77',
    "&:hover": {
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    marginBottom: '30px',
  },
}));

const heads = [
  "Country",
  "Cases",
  "Today Cases",
  "Deaths",
  "Today Deaths",
  "Recovered",
  "Active",
  "Critical",
  "Cases Per Million",
  "Deaths Per Million",
  "Tests",
  "Tests Per Million",
  "Continent"
]

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const CovidList = (props) => {
  const { data } = props;
  const [DATA, setDATA] = useState([]);
  const [page, setPage] = React.useState(1);
  const rows = 10;

  useEffect(() => {
    if (data) {
      setDATA([...data]);
    }
  }, [data])

  const SwitchPage = (props) => {
    const { page, handleBackButtonClick, handleNextButtonClick } = props;
    return (
      <>
        {
          page > 1 && page < 212
            ? <>
              <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
                <Button onClick={handleBackButtonClick}>BACK</Button>
                <Button onClick={handleNextButtonClick}>NEXT</Button>
              </ButtonGroup>
            </>
            : page === 1
              ? <>
                <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
                  <Button onClick={handleNextButtonClick}>NEXT</Button>
                </ButtonGroup>
              </>
              : <>
                <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
                  <Button onClick={handleBackButtonClick}>BACK</Button>
                </ButtonGroup>
              </>
        }
      </>
    )
  }

  const Search = () => {
    const [value, setValue] = useState("");

    return (
      <div style={{ backgroundColor: "#F58529" }}>
        <InputBase
          style={{ alignSelf: 'center' }}
          className={classes.input}
          placeholder="Search Country"
          inputProps={{ 'aria-label': 'search requests' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          {DATA
            .filter(item =>
              value === ""
                ? !item.country.toLowerCase().includes(value)
                : item.country.toLowerCase().includes(value.trim().toLowerCase()))
            .map(item => (
              <div onClick={() => (setSearchRes(item))} className={classes.searchRes}>{item.country}</div>
            ))
          }
        </div>
      </div>
    )
  }

  const handleNextButtonClick = () => {
    if (page < 212) {
      setPage(page + 1);
    }
  };
  const handleBackButtonClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const classes = useStyles();

  const AlertCountry = (props) => {
    const { searchRes } = props;
    return (
      <div className={classes.alert}>
        {searchRes
          ? 
          <Alert severity="info">
            <AlertTitle>
              <strong>Country: {searchRes.country}</strong>
            </AlertTitle>
            <p>Cases: {searchRes.cases}</p>
            <p>Today Cases: {searchRes.todayCases}</p>
            <p>Deaths: {searchRes.todayDeaths}</p>
            <p>Recovered: {searchRes.recovered}</p>
            <p>Active: {searchRes.active}</p>
            <p>Critical: {searchRes.critical}</p>
            <p>Cases Per Million: {searchRes.casesPerOneMillion}</p>
            <p>Deaths Per Million: {searchRes.deathsPerOneMillion}</p>
            <p>Tests: {searchRes.tests}</p>
            <p>Tests Per Million: {searchRes.testsPerOneMillion}</p>
            <p>Continent: {searchRes.continent}</p>
          </Alert>
          : <></>
        }

      </div>
    )
  }
  const [searchRes, setSearchRes] = useState({});

  return (
    <div>
      <Paper className={classes.root}>
        <Search />
        <AlertCountry searchRes={searchRes} />
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {heads.map(head => (
                  <StyledTableCell align='center'>
                    <div style={{ fontWeight: 'bold' }}>{head}</div>
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {DATA.slice(page * rows, page * rows + rows).map(item => (
                <StyledTableRow >
                  <StyledTableCell component="th" scope="row">
                    {item.country}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.cases}</StyledTableCell>
                  <StyledTableCell align="center">{item.todayCases}</StyledTableCell>
                  <StyledTableCell align="center">{item.deaths}</StyledTableCell>
                  <StyledTableCell align="center">{item.todayDeaths}</StyledTableCell>
                  <StyledTableCell align="center">{item.recovered}</StyledTableCell>
                  <StyledTableCell align="center">{item.active}</StyledTableCell>
                  <StyledTableCell align="center">{item.critical}</StyledTableCell>
                  <StyledTableCell align="center">{item.casesPerOneMillion}</StyledTableCell>
                  <StyledTableCell align="center">{item.deathsPerOneMillion}</StyledTableCell>
                  <StyledTableCell align="center">{item.tests}</StyledTableCell>
                  <StyledTableCell align="center">{item.testsPerOneMillion}</StyledTableCell>
                  <StyledTableCell align="center">{item.continent}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <SwitchPage
          page={page}
          handleNextButtonClick={handleNextButtonClick}
          handleBackButtonClick={handleBackButtonClick}
        />
      </Paper>
    </div>
  )
}

export default CovidList;

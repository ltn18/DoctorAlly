import React, { useState, useEffect, useContext } from 'react';

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

import localeContext, { getLongLineText } from '../../context/localeCtx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '30px',
    marginTop: '30px',
    fontFamily: 'Faustina',
  },
  container: {
    maxHeight: 900,
    fontFamily: 'Faustina',
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
    },
    fontFamily: 'Faustina'
  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    marginBottom: '30px',
    fontFamily: 'Faustina',
  },
  font: {
    fontFamily: 'Faustina',
  },
}));

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
  font: {
    fontFamily: 'Faustina',
  },
}))(TableRow);

const CovidList = (props) => {
  const { data } = props;
  const [DATA, setDATA] = useState([]);
  const [page, setPage] = React.useState(0);
  const rows = 10;

  useEffect(() => {
    if (data) {
      setDATA([...data]);
    }
  }, [data])

  const SwitchPage = (props) => {
    const { page, handleBackButtonClick, handleNextButtonClick } = props;
    const locale = useContext(localeContext);
    return (
      <>
        {
          page > 0 && page < 212
            ? <>
              <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
                <Button
                  className={classes.font}
                  onClick={handleBackButtonClick}>
                  {getLongLineText(locale.lang, "covid19_data", "footer", "back_button")}
                </Button>
                <Button
                  className={classes.font}
                  onClick={handleNextButtonClick}>
                  {getLongLineText(locale.lang, "covid19_data", "footer", "next_button")}
                </Button>
              </ButtonGroup>
            </>
            : page === 0
              ? <>
                <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
                  <Button
                    className={classes.font}
                    onClick={handleNextButtonClick}>
                    {getLongLineText(locale.lang, "covid19_data", "footer", "next_button")}
                  </Button>
                </ButtonGroup>
              </>
              : <>
                <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
                  <Button
                    className={classes.font}
                    onClick={handleBackButtonClick}>
                    {getLongLineText(locale.lang, "covid19_data", "footer", "back_button")}
                  </Button>
                </ButtonGroup>
              </>
        }
      </>
    )
  }

  const Search = () => {
    const [value, setValue] = useState("");
    const locale = useContext(localeContext);
    return (
      <div style={{ backgroundColor: "#F58529" }}>
        <InputBase
          style={{ alignSelf: 'center', fontFamily: 'Faustina' }}
          className={classes.input}
          placeholder={getLongLineText(locale.lang, "covid19_data", "search_placeholder", null)}
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
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const classes = useStyles();

  const AlertCountry = (props) => {
    const { searchRes } = props;
    const locale = useContext(localeContext);
    return (
      <div className={classes.alert}>
        {searchRes
          ?
          <Alert severity="info">
            <AlertTitle className={classes.font}>
              <strong>{getLongLineText(locale.lang, "covid19_data", "country", null)}: {searchRes.country}</strong>
            </AlertTitle>
            <div className={classes.font}>
              <p>{getLongLineText(locale.lang, "covid19_data", "continent", null)}: {convertContinent(locale.lang, searchRes.continent)}</p>
              <p>{getLongLineText(locale.lang, "covid19_data", "today_cases", null)}: {searchRes.todayCases}</p>
              <p>{getLongLineText(locale.lang, "covid19_data", "today_deaths", null)}: {searchRes.todayDeaths}</p>
              <p>{getLongLineText(locale.lang, "covid19_data", "cases", null)}: {searchRes.cases}</p>
              <p>{getLongLineText(locale.lang, "covid19_data", "deaths", null)}: {searchRes.deaths}</p>
              <p>{getLongLineText(locale.lang, "covid19_data", "tests", null)}: {searchRes.tests}</p>
              <p>{getLongLineText(locale.lang, "covid19_data", "recovered", null)}: {searchRes.recovered}</p>
              <p>{getLongLineText(locale.lang, "covid19_data", "active", null)}: {searchRes.active}</p>
              <p>{getLongLineText(locale.lang, "covid19_data", "critical", null)}: {searchRes.critical}</p>
              <p>{getLongLineText(locale.lang, "covid19_data", "cases_per_million", null)}: {searchRes.casesPerOneMillion}</p>
              <p>{getLongLineText(locale.lang, "covid19_data", "deaths_per_million", null)}: {searchRes.deathsPerOneMillion}</p>
              <p>{getLongLineText(locale.lang, "covid19_data", "tests_per_million", null)}: {searchRes.testsPerOneMillion}</p>
            </div>
          </Alert>
          : <></>
        }

      </div>
    )
  }
  const [searchRes, setSearchRes] = useState({});

  const locale = useContext(localeContext);

  const convertContinent = (lang, continent) => {
    if (lang === "VIE") {
      if (continent === "Asia") return "Châu Á";
      if (continent === "Europe") return "Châu Âu";
      if (continent === "Africa") return "Châu Phi";
      if (continent === "Australia/Oceania") return "Châu Đại Dương";
      if (continent === "North America") return "Bắc Mỹ";
      if (continent === "South America") return "Nam Mỹ";
    } else {
      return continent;
    }
  }

  return (
    <div>
      <Paper className={classes.root}>
        <Search />
        <AlertCountry searchRes={searchRes} />
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell align='center'>
                  <div
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Faustina'
                    }}>{getLongLineText(locale.lang, "covid19_data", "heads", "country")}
                  </div>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <div
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Faustina'
                    }}>{getLongLineText(locale.lang, "covid19_data", "heads", "cases")}
                  </div>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <div
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Faustina'
                    }}>{getLongLineText(locale.lang, "covid19_data", "heads", "deaths")}
                  </div>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <div
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Faustina'
                    }}>{getLongLineText(locale.lang, "covid19_data", "heads", "recovered")}
                  </div>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <div
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Faustina'
                    }}>{getLongLineText(locale.lang, "covid19_data", "heads", "active")}
                  </div>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <div
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Faustina'
                    }}>{getLongLineText(locale.lang, "covid19_data", "heads", "critical")}
                  </div>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <div
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Faustina'
                    }}>{getLongLineText(locale.lang, "covid19_data", "heads", "tests")}
                  </div>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <div
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Faustina'
                    }}>{getLongLineText(locale.lang, "covid19_data", "heads", "continent")}
                  </div>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {DATA.slice(page * rows, page * rows + rows).map(item => (
                <StyledTableRow >
                  <StyledTableCell className={classes.font} component="th" scope="row">
                    {item.country}
                  </StyledTableCell>
                  <StyledTableCell className={classes.font} align="center">{item.cases}</StyledTableCell>
                  <StyledTableCell className={classes.font} align="center">{item.deaths}</StyledTableCell>
                  <StyledTableCell className={classes.font} align="center">{item.recovered}</StyledTableCell>
                  <StyledTableCell className={classes.font} align="center">{item.active}</StyledTableCell>
                  <StyledTableCell className={classes.font} align="center">{item.critical}</StyledTableCell>
                  <StyledTableCell className={classes.font} align="center">{item.tests}</StyledTableCell>
                  <StyledTableCell className={classes.font} align="center">
                    {convertContinent(locale.lang, item.continent)}
                  </StyledTableCell>
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

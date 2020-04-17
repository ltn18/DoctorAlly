import React, { useState } from 'react';

import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useEffect } from 'react';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginBottom: '30px',
    marginTop: '30px'
  },
  container: {
    maxHeight: 800,
  },
});

const heads = [
  "Country",
  "Cases",
  "Today Cases",
  "Deaths",
  "Today Deaths",
  "Recovered",
  "Active",
  "Critical",
  "Cases Per One Million",
  "Deaths Per One Million",
  "Tests Per One Million"
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

  useEffect(() => {
    if (data) {
      setDATA([...data]);
    }
  }, [data])

  return (
    <div>
      <Paper className={classes.root}>
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
                  <StyledTableCell align="center">{item.testsPerOneMillion}</StyledTableCell>
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

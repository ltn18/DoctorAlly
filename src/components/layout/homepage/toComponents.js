import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import localeContext, { getLongLineText } from '../../context/localeCtx';

const useStyles = makeStyles(() => ({
  direct: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '15px',
  },
  directItem: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingBottom: '5px',
    paddingTop: '5px',
    width: '600px',
    // height: '35vh',
  },
  title: {
    fontSize: '25px',
    "&:hover": {
      cursor: 'pointer',
      textDecoration: 'underline',
    }
  },
  learn_more: {
    "&:hover": {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    color: '#F77737'
  },
  contact_us: {
    "&:hover": {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    color: '#EEDC31'
  }
}));

const ToRequestHelp = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const locale = useContext(localeContext);

  return (
    <div className={classes.directItem}>
      <strong
        className={classes.title}
        style={{ fontSize: '25px', color: '#F50057' }}
        onClick={() => history.push("/request_help/1")}
      >
        {getLongLineText(locale.lang, "homepage", "request_help", "title")}
      </strong>
      <p style={{ wordWrap: 'break-word', marginTop: '15px' }}>
        <strong>{getLongLineText(locale.lang, "homepage", "request_help", "description_strong")}</strong>
        {getLongLineText(locale.lang, "homepage", "request_help", "description")}
      </p>
    </div>
  )
}

const ToVolunteer = () => {
  const classes = useStyles();
  const history = useHistory();
  const locale = useContext(localeContext);

  return (
    <div className={classes.directItem} >
      <strong
        className={classes.title}
        style={{ color: '#3F51B5' }}
        onClick={() => history.push("/volunteer")}
      >
        {getLongLineText(locale.lang, "homepage", "volunteer", "title")}
      </strong>
      <p style={{ wordWrap: 'break-word', marginTop: '15px' }}>
        <strong>{getLongLineText(locale.lang, "homepage", "volunteer", "description_strong")}</strong>
        {getLongLineText(locale.lang, "homepage", "volunteer", "description")}
      </p>
    </div>
  )
}

const ToSupplyStores = () => {
  const classes = useStyles();
  const history = useHistory();
  const locale = useContext(localeContext);

  return (
    <div className={classes.directItem}>
      <strong
        className={classes.title}
        style={{ color: '#008000' }}
        onClick={() => history.push("/supply_stores")}
      >
        {getLongLineText(locale.lang, "homepage", "supply_stores", "title")}
      </strong>
      <p style={{ wordWrap: 'break-word', marginTop: '15px' }}>
        <strong>{getLongLineText(locale.lang, "homepage", "supply_stores", "description_strong")}</strong>
        {getLongLineText(locale.lang, "homepage", "supply_stores", "description")}
      </p>
    </div>
  )
}

const ToCovid19Data = () => {
  const classes = useStyles();
  const history = useHistory();
  const locale = useContext(localeContext);

  return (
    <div className={classes.directItem}>
      <strong
        className={classes.title}
        style={{ fontSize: '25px', color: '#8134AF' }}
        onClick={() => history.push("/covid19_data")}
      >
        {getLongLineText(locale.lang, "homepage", "covid19_data", "title")}
      </strong>
      <p style={{ wordWrap: 'break-word', marginTop: '15px' }}>
        <strong>{getLongLineText(locale.lang, "homepage", "covid19_data", "description_strong")}</strong>
        {getLongLineText(locale.lang, "homepage", "covid19_data", "description")}
      </p>
    </div>
  )
}

const ToLearnMore = () => {
  const classes = useStyles();
  const history = useHistory();
  const locale = useContext(localeContext);

  return (
    <div className={classes.directItem}>
      <strong
        className={classes.title}
        style={{ fontSize: '25px', color: '#F77737' }}
        onClick={() => history.push("/how_it_works")}
      >
        {getLongLineText(locale.lang, "homepage", "how_it_works", "title")}
      </strong>
      <p style={{ wordWrap: 'break-word', marginTop: '15px' }}>
        <strong>{getLongLineText(locale.lang, "homepage", "how_it_works", "description_strong")}</strong>
        {getLongLineText(locale.lang, "homepage", "how_it_works", "span_b4")}
        {<span className={classes.learn_more} onClick={() => history.push("/how_it_works")}>
          {getLongLineText(locale.lang, "homepage", "how_it_works", "span_link")}
        </span>}
        {getLongLineText(locale.lang, "homepage", "how_it_works", "span_af")}
      </p>
    </div>
  )
}

const ToContactUs = () => {
  const classes = useStyles();
  const history = useHistory();
  const locale = useContext(localeContext);

  return (
    <div className={classes.directItem}>
      <strong
        className={classes.title}
        style={{ fontSize: '25px', color: '#EEDC31' }}
        onClick={() => history.push("/contact_us")}
      >
        {getLongLineText(locale.lang, "homepage", "contact_us", "title")}
      </strong>
      <p style={{ wordWrap: 'break-word', marginTop: '15px' }}>
        <strong>{getLongLineText(locale.lang, "homepage", "contact_us", "description_strong")}</strong>
        {getLongLineText(locale.lang, "homepage", "contact_us", "span_b4")}
        {<span className={classes.contact_us} onClick={() => history.push("/contact_us")}>
          {getLongLineText(locale.lang, "homepage", "contact_us", "span_link")}
        </span>}
      </p>
    </div>
  )
}

const ToHeaders = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.direct}>
        <ToVolunteer />
        <ToRequestHelp />
      </div>
      <div className={classes.direct}>
        <ToSupplyStores />
        <ToCovid19Data />
      </div>
      <div className={classes.direct}>
        <ToLearnMore />
        <ToContactUs />
      </div>
    </>
  )
}

export default ToHeaders;
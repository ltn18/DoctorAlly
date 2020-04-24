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
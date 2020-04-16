import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Link, animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const [show, setShow] = useState(true);

  const handleRouteSwitch = (path) => {
    history.push("/" + path)
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
    console.log("scrolled")
  }

  

  return (
    <div className={classes.root} id="navbar">
      <Button
        onClick={() => { handleRouteSwitch(""); scrollToTop() }}
        className={classes.avatar}
        style={{ backgroundColor: 'white' }}
      >
        <img src="logo192.png" alt="LOGO" style={{ width: 50, height: 50 }} />
        <span style={{ marginLeft: 20 }}>HACKCOVY</span>
      </Button>

      <div className={classes.buttonGroup}>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Button>
            About
          </Button>
        </Link>

        <Link
          activeClass="active"
          to="volunteer"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Button color="primary">
            Volunteer
          </Button>
        </Link>

        <Link
          activeClass="active"
          to="request_help"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Button color="secondary">
            Request help
          </Button>
        </Link>

        <Link
          activeClass="active"
          to="supply_stores"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Button style={{ color: 'green' }}>
            Supply stores
          </Button>
        </Link>

        <Link
          activeClass="active"
          to="covid19_data"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Button style={{ color: '#8134AF' }}>
            Covid-19 Data
          </Button>
        </Link>

        <Link
          activeClass="active"
          to="how_it_works"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Button>
            How it works
          </Button>
        </Link>
      </div>

    </div>
  )
}

export default Header;

import React, { useContext } from "react";
import localeContext, { getText } from "../../context/localeCtx";
import FacebookConnect from './facebookConnect';

import { useHistory } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { Button, MenuItem, FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  font: {
    fontFamily: "Merriweather",
    fontSize: "15px",
  },
  fontLogo: {
    fontFamily: "Yeseva One",
  },
  formControl: {
    marginTop: "15px",
  },
  btn_volunteer: {
    padding: 10,
    fontFamily: "Faustina",
    fontSize: "20px",
    color: "#3f51b5",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  btn_request_help: {
    padding: 10,
    fontFamily: "Faustina",
    fontSize: "20px",
    color: "#c51162",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  btn_nearby_stores: {
    padding: 10,
    fontFamily: "Faustina",
    fontSize: "20px",
    color: "#008000",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const locale = useContext(localeContext);

  const handleRouteSwitch = (path) => {
    history.push("/" + path);
  };

  return (
    <div className={classes.root}>
      <Button
        onClick={() => {
          handleRouteSwitch("");
        }}
        className={classes.avatar}
        style={{ backgroundColor: "white" }}
      >
        {/* <FavoriteIcon style={{ color: "red" }} /> */}
        <span
          style={{ marginLeft: 5, fontSize: "30px" }}
          className={classes.fontLogo}
        >
          DoctorAlly
        </span>
      </Button>
      <div className={classes.buttonGroup}>
        <strong
          onClick={() => {
            handleRouteSwitch("volunteer");
          }}
          color="primary"
          className={classes.btn_volunteer}
        >
          {getText("header", "volunteer", locale.lang)}
        </strong>

        <strong
          onClick={() => {
            handleRouteSwitch("request_help/1");
          }}
          color="secondary"
          className={classes.btn_request_help}
        >
          {getText("header", "request_help", locale.lang)}
        </strong>

        <strong
          onClick={() => {
            handleRouteSwitch("supply_stores");
          }}
          className={classes.btn_nearby_stores}
        >
          {getText("header", "supply_stores", locale.lang)}
        </strong>

        <FormControl className={classes.formControl}>
          <Select
            value={locale.lang}
            onChange={(e) => {
              locale.setLang(e.target.value);
            }}
            className={classes.font}
          >
            <MenuItem value={"ENG"} className={classes.font}>
              ENG
            </MenuItem>
            <MenuItem value={"VIE"} className={classes.font}>
              VIE
            </MenuItem>
          </Select>
        </FormControl>
        <FacebookConnect />
      </div>
    </div>
  );
};

export default Header;

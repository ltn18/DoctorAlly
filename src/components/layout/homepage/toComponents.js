import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import localeContext, { getLongLineText } from "../../context/localeCtx";

const useStyles = makeStyles(() => ({
  direct: {
    display: "flex",
    flexDirection: "row",
    marginTop: "15px",
  },
  directItem: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "5px",
    paddingTop: "5px",
    width: "600px",
    fontFamily: "Faustina",
  },
  titleVolunteer: {
    color: "#3F51B5",
    fontSize: "25px",
    width: "35%",
    borderRadius: "10px",
    padding: "3px",
    textAlign: "center",
    alignSelf: "center",
    marginBottom: "10px",
    "&:hover": {
      cursor: "pointer",
      color: "white",
      backgroundColor: "#3F51B5",
    },
  },
  titleRequestHelp: {
    color: "#F50057",
    fontSize: "25px",
    width: "35%",
    borderRadius: "10px",
    padding: "3px",
    textAlign: "center",
    alignSelf: "center",
    marginBottom: "10px",
    "&:hover": {
      cursor: "pointer",
      color: "white",
      backgroundColor: "#F50057",
    },
  },
  about_us: {
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
    color: "#EEDC31",
  },
  media: {
    height: 350,
  },
}));

const ToRequestHelp = () => {
  const classes = useStyles();
  const history = useHistory();
  const locale = useContext(localeContext);

  return (
    <div
      className={classes.directItem}
      style={{ backgroundColor: "rgba(0,0,0,0)" }}
    >
      <p style={{ wordWrap: "break-word", marginTop: "15px" }}>
        <strong style={{ fontSize: "20px" }}>
          {getLongLineText(
            locale.lang,
            "homepage",
            "request_help",
            "description_strong"
          )}
        </strong>
        {getLongLineText(
          locale.lang,
          "homepage",
          "request_help",
          "description"
        )}
      </p>
      <CardMedia className={classes.media} image={"homepage_requestHelp.jpg"} />
      <strong
        className={classes.titleRequestHelp}
        onClick={() => history.push("/request_help/1")}
      >
        {getLongLineText(locale.lang, "homepage", "request_help", "title")}
      </strong>
    </div>
  );
};

const ToVolunteer = () => {
  const classes = useStyles();
  const history = useHistory();
  const locale = useContext(localeContext);

  return (
    <div
      className={classes.directItem}
      style={{ backgroundColor: "rgba(0,0,0,0.03)" }}
    >
      <p style={{ wordWrap: "break-word", marginTop: "15px" }}>
        <strong style={{ fontSize: "20px" }}>
          {getLongLineText(
            locale.lang,
            "homepage",
            "volunteer",
            "description_strong"
          )}
        </strong>
        {getLongLineText(locale.lang, "homepage", "volunteer", "description")}
      </p>
      <CardMedia className={classes.media} image={"homepage_volunteer.jpg"} />
      <strong
        className={classes.titleVolunteer}
        onClick={() => history.push("/volunteer")}
      >
        {getLongLineText(locale.lang, "homepage", "volunteer", "title")}
      </strong>
    </div>
  );
};

const ToHeaders = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.direct}>
        <ToVolunteer />
        <ToRequestHelp />
      </div>
    </>
  );
};

export default ToHeaders;

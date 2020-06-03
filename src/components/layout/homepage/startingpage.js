import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  p: {
    alignSelf: "center",
    fontWeight: "bold",
    fontFamily: "Faustina",
    fontSize: 25,
    color: "#D50000",
    marginTop: 20,
  },
  p_desc: {
    alignSelf: "center",
    fontWeight: "bold",
    fontFamily: "Faustina",
    fontSize: 20,
    marginTop: 20,
  },
  btn: {
    margin: "20px",
    fontSize: 20,
    fontFamily: "Faustina",
    borderRadius: "10px",
    fontWeight: "bold",
    backgroundColor: "#D50000",
    color: "white",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "white",
      color: "#D50000",
    },
  },
}));

const Landing = () => {
  const classes = useStyle();
  let history = useHistory();
  const handleLearnMoreBtn = () => {
    history.push("/how_it_works");
  };
  return (
    <div className={classes.root}>
      <img
        style={{ width: "5  00px", height: "400px" }}
        src="homepage_landing.jpg"
        alt="landing img"
      />
      <p className={classes.p}>
        Healthcare workers need our help to fight COVID-19
      </p>
      <p className={classes.p_desc}>
        Volunteer your time or request support for meals, pet care, errands, and
        more during the COVID-19 pandemic.
      </p>
      <Button
        variant="contained"
        className={classes.btn}
        onClick={handleLearnMoreBtn}
      >
        LEARN MORE
      </Button>
    </div>
  );
};

export default Landing;

import React from "react";
import ToHeaders from "./toComponents";
import { About } from "../../content/index";
import Map from "../../content/covid19_data/map";
import Landing from "./startingpage";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  p: {
    alignSelf: "center",
    fontWeight: "bold",
    fontFamily: "Faustina",
    fontSize: 30,
    marginBottom: "10px",
    color: "#D50000",
  },
  p_desc: {
    alignSelf: "center",
    fontWeight: "bold",
    fontFamily: "Faustina",
    fontSize: 25,
    marginBottom: "10px",
  },
  p_list: {
    alignSelf: "center",
    // fontWeight: "bold",
    fontFamily: "Faustina",
    fontSize: 20,
    marginBottom: "10px",
  },
  btn_fb: {
    height: "50px",
    width: "50px",
    margin: "10px",
    border: "none",
    backgroundColor: "white",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#0078ff",
    },
  },
  btn_ig: {
    height: "50px",
    width: "50px",
    margin: "10px",
    border: "none",
    backgroundColor: "white",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#fb3058",
    },
  },
  btn_li: {
    height: "50px",
    width: "50px",
    margin: "10px",
    border: "none",
    backgroundColor: "white",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#0077b5",
    },
  },
  btn_m: {
    height: "50px",
    width: "50px",
    margin: "10px",
    border: "none",
    backgroundColor: "white",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#b23121",
    },
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Container maxWidth="lg">
        <Landing />
        <ToHeaders />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p className={classes.p}>
            Volunteers are ready to help across the world
          </p>
          <Map />
          <p className={classes.p}>
            Help us make sure every healthcare worker gets the support they need
            to fight COVID-19
          </p>
          <p className={classes.p_desc}>
            Share #DoctorAlly with family, friends, and on social media to help
            spread the word
          </p>
          <p className={classes.p_list}>
            <span style={{ fontWeight: "bold", color: "#D50000" }}>50+</span>{" "}
            volunteers
          </p>
          <p className={classes.p_list}>
            <span style={{ fontWeight: "bold", color: "#D50000" }}>5+</span>{" "}
            regions
          </p>
          <p className={classes.p_list}>...and growing</p>
          <div style={{ alignSelf: "center" }}>
            <a href="https://www.facebook.com/doctorally.project/">
              <button className={classes.btn_fb}>
                <FacebookIcon />
              </button>
            </a>
            <a href="https://www.linkedin.com/company/doctorally/">
              <button className={classes.btn_li}>
                <LinkedInIcon />
              </button>
            </a>
            <a href="https://www.instagram.com/doctorally.project/">
              <button className={classes.btn_ig}>
                <InstagramIcon />
              </button>
            </a>
            <a href="mailto:doctorally.project@gmail.com">
              <button className={classes.btn_m}>
                <MailIcon />
              </button>
            </a>
          </div>
          <p className={classes.p}>Our Team</p>
        </div>
      </Container>
      <About />
    </div>
  );
};

export default HomePage;

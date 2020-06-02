import React, { useState } from "react";
import { FacebookProvider, LoginButton } from "react-facebook";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  display: {
    fontSize: "20px",
    fontFamily: "Faustina",
    textAlign: "center",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "5px",
    paddingTop: "8px",
    "&:hover": {
      cursor: "pointer",
      color: "red",
    },
  },
}));

const FacebookConnect = () => {
  const [user, setUser] = useState(null);
  const classes = useStyles();
  const handleError = (data) => {
    console.log(data);
  };
  const handleResponse = (user) => {
    console.log(user);
    setUser(user);
  };

  return (
    <FacebookProvider appId="248026726291333">
      {user !== null ? (
        <strong className={classes.display}>
          {user.profile.first_name + " " + user.profile.last_name}
        </strong>
      ) : (
        <LoginButton
          scope="email"
          onCompleted={handleResponse}
          onError={handleError}
        >
          <span>Facebook Login</span>
        </LoginButton>
      )}
    </FacebookProvider>
  );
};

export default FacebookConnect;

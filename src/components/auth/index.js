import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Banner from "./banner";

import Login from "./login";
import Register from "./register";

const Auth = () => {
  const [haveAccount, setHaveAccount] = useState(true);

  return (
    <Container className="d-flex align-items-center flex-column flex-grow-1">
      <Banner />
      {haveAccount ? (
        <Login onMoveToRegister={() => setHaveAccount(false)} />
      ) : (
        <Register onMoveToLogin={() => setHaveAccount(true)} />
      )}
    </Container>
  );
};

export default Auth;

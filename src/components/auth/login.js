import React, { useState, useContext } from "react";
import { Form, Button, Modal, Alert } from "react-bootstrap";

import { useFormik } from "formik";
import * as yup from "yup";
import { useAsync } from "react-hook-async";

import { login } from "../../api/auth";

import authCtx from "../context/auth";
import { useHistory } from "react-router-dom";

const ValidationSchema = yup.object({
  username: yup.string().required("Username is required!"),
  password: yup.string().required("Password is required!"),
});

const Login = ({ onMoveToRegister }) => {
  const { setAuthUser } = useContext(authCtx);

  const [loginApiData, fetchLogin] = useAsync(null, login);

  const [failureModalVisible, setFailureModalVisible] = useState(false);
  const history = useHistory()
  const formik = useFormik({
    validationSchema: ValidationSchema,
    initialValues: {
      username: "",
      password: "",
      role:"",
      rememberMe: false,
    },
    onSubmit: (values) => {
      fetchLogin(values.username, values.password, values.role)
        .then((authUser) => {
          if (values.rememberMe) {
            localStorage.setItem("jwt", authUser.token);
          }
          setAuthUser(authUser);
          history.push("/")
        })
        .catch(() => {
          setFailureModalVisible(true);
        });
    },
  });

  return (
    <div className="w-25">
      <Modal show={failureModalVisible} centered>
        <Modal.Body className="alert-danger text-center">
          <Alert variant="danger" className="border-0">
            <Alert.Heading>Something went wrong</Alert.Heading>
            {loginApiData.error && (
              <p>{loginApiData.error.response.data.err}</p>
            )}
          </Alert>
          <Button
            variant="danger"
            size="sm"
            onClick={() => setFailureModalVisible(false)}
          >
            Okay
          </Button>
        </Modal.Body>
      </Modal>
      <h4 className="code text-center">Login</h4>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label className="code">Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            isInvalid={formik.errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.username}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label className="code">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            isInvalid={formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group>
          Log in as
        <Form.Check
          type="radio"
          name="role"
          label="Volunteer"
          value="volunteer"
          onChange={formik.handleChange}
        />
        <Form.Check
          type="radio"
          name="role"
          label="Doctor"
          value="doctor"
          onChange={formik.handleChange}
        />  
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            className="code"
            label="Remember me"
            name="rememberMe"
            value={formik.values.rememberMe}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Button
            block
            className="code"
            type="submit"
            disabled={loginApiData.loading}
          >
            Login
          </Button>
          <Form.Text className="code">
            Don&apos;t have account?&nbsp;
            <span className="link" onClick={onMoveToRegister}>
              Register
            </span>
            &nbsp;now!
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;

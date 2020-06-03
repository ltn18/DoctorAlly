import React, { useState } from 'react';
import { Form, Button, Alert, Modal } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { useAsync } from 'react-hook-async';

import { register } from '../../api/auth';

const ValidateSchema = yup.object({
  username: yup
    .string()
    .min(6, "Username's length must be greater than 6!")
    .required('Username is required!'),
  password: yup
    .string()
    .min(8, "Password's length must be greater than 8!")
    .required('Password is required!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Confirm password not matched!')
    .required('Confirm password is required!'),
});

const Register = ({ onMoveToLogin }) => {
  const [registerApiData, fetchRegister] = useAsync(null, register);

  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [failureModalVisible, setFailureModalVisible] = useState(false);

  const formik = useFormik({
    validationSchema: ValidateSchema,
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      role:''
    },
    onSubmit: (values) => {
      console.log(values)
      fetchRegister(values.username, values.password,values.role)
        .then(() => setSuccessModalVisible(true))
        .catch(() => {
          setFailureModalVisible(true);
        });
    },
  });

  return (
    <div className="w-25">
      <Modal show={successModalVisible} centered>
        <Modal.Body className="alert-success text-center">
          <Alert variant="success" className="border-0">
            <Alert.Heading>Registered</Alert.Heading>
            <p>Registered Successfully!</p>
          </Alert>
          <Button
            variant="success"
            size="sm"
            onClick={() => setSuccessModalVisible(false)}
          >
            Confirm
          </Button>
        </Modal.Body>
      </Modal>
      <Modal show={failureModalVisible} centered>
        <Modal.Body className="alert-danger text-center">
          <Alert variant="danger" className="border-0">
            <Alert.Heading>Something went wrong</Alert.Heading>
            {registerApiData.error && (
              <p>{registerApiData.error.response.data.err}</p>
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
      <h4 className="code text-center">Register</h4>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label className="code">Username</Form.Label>
          <Form.Control
            type="text"
            value={formik.values.username}
            name="username"
            onChange={formik.handleChange}
            isInvalid={Boolean(formik.errors.username)}
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
            isInvalid={Boolean(formik.errors.password)}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label className="code">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            isInvalid={Boolean(formik.errors.confirmPassword)}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
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
          <Button
            block
            className="code"
            type="submit"
            disabled={registerApiData.loading}
          >
            Register
          </Button>
          <Form.Text className="code">
            Already have an account?&nbsp;
            <span className="link" onClick={onMoveToLogin}>
              Login
            </span>
            &nbsp;now!
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;

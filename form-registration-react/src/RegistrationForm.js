import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
const RegistrationForm = (props) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Form style={{ width: 350, height: 350 }} className="text-center">
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#fff" }}>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={props.handlerChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#fff" }}>Surname</Form.Label>
          <Form.Control
            type="text"
            name="surname"
            placeholder="Enter your Surname"
            onChange={props.handlerChange}
          />
        </Form.Group>
        <Form.Label style={{ color: "#fff" }}>Username</Form.Label>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Username"
            name="username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={props.handlerChange}
          />
        </InputGroup>
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#fff" }}>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={props.handlerChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "#fff" }}>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={props.handlerChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={props.submitHandler}>
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to="/LoginForm"
          >
            Register
          </Link>
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;

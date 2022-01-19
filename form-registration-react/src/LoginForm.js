import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const LoginForm = () => {
  let loginFields = {
    username: "",
    password: "",
  };
  const [input, setInput] = React.useState(loginFields);

  const [check, setCheck] = React.useState([]);

  const loginHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const checkUsername = (e) => {
    e.preventDefault();
    let url = "https://61e7b7b5e32cd90017acbcc9.mockapi.io";
    axios
      .get(`${url}/users`)
      .then(({ data }) => data)
      .then((data) => data.find);

    // user.username === input.username && user.password === input.password
  };

  return (
    <div className="d-flex justify-content-center">
      <Form
        style={{
          width: 350,
          height: 350,
        }}
        className="text-center"
      >
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter your name"
            onChange={loginHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="password"
            placeholder="Enter your Surname"
            onChange={loginHandler}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={checkUsername}>
          Login
        </Button>
        <Button
          onClick={() => {
            console.log(check);
          }}
        ></Button>
      </Form>
    </div>
  );
};
export default LoginForm;

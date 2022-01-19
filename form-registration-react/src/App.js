import RegistrationForm from "./RegistrationForm";
import "./App.css";
import React from "react";
import LoginForm from "./LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

function App() {
  let init = {
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  };
  const [state, setState] = React.useState(init);

  const handlerChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };
  const createUser = () => {
    const baseUrl = "https://61e7b7b5e32cd90017acbcc9.mockapi.io";
    axios
      .post(`${baseUrl}/users`, state)
      .then((response) => setState(response.data));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      state.username !== undefined &&
      state.name !== undefined &&
      state.email !== undefined &&
      state.surname !== undefined &&
      state.password !== undefined
    ) {
      createUser();
      alert("User created please choose ok");
    } else {
      alert("Please done form");
    }
  };

  return (
    <div className="cover-photo">
      <h1 className="text-center">Registration Form</h1>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => (
              <RegistrationForm
                value={state}
                handlerChange={handlerChange}
                submitHandler={submitHandler}
              />
            )}
          />
          <Route path="/LoginForm" component={LoginForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapprer from "../assets/wrappers/RegisterPage";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";

const initalState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [value, setValue] = useState(initalState);
  const { isLoading, showAlert, displayAlert, registerUser } = useAppContext();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = value;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      console.log("already a member");
    } else {
      registerUser(currentUser);
    }
  };

  const toggleMember = () => {
    setValue({ ...value, isMember: !value.isMember });
  };
  return (
    <Wrapprer className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        {value.isMember ? <h3>Login</h3> : <h3>Refister</h3>}
        {showAlert && <Alert />}
        {!value.isMember && (
          <FormRow
            type="text"
            name="name"
            value={value.name}
            labelText="name"
            handleChange={handleChange}
          />
        )}

        <FormRow
          type="text"
          name="email"
          value={value.email}
          labelText="email"
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={value.password}
          labelText="password"
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
          {value.isMember ? "Not a member yet? " : "Already a member? "}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {value.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapprer>
  );
};

export default Register;

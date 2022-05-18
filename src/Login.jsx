import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  return (
    <div className="form">
      <div class="login-page">
        <h1 className="zangHeading">Zang It</h1>

        <form class="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>login</button>
          <p class="message">Not registered? Create an account</p>
          <Link to="/Register">Register</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <div class="Register-form">
        <h1 className="Register-head">Register</h1>
        <form className="register">
          <input type="text" name="username" placeholder="username" />
          <input type="number" name="phoennumber" placeholder="phone number" />
          <input type="email" name="email" placeholder="e-mail" />
          <input type="password" name="password" placeholder="password" />
          <input
            type="password"
            name="confirmpassword"
            placeholder="confirm password"
          />
          <button className="btn">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

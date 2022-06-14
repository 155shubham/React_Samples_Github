import React, { useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("/api/users/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

async function signupUser(credentials) {
  await fetch("/api/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function DPSTMLoginForm({ setToken }) {
  const initialFormData = Object.freeze({
    UserName: "",
    Password: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const token = await signupUser(formData);
    setToken(token.token);
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    const token = await loginUser(formData);
    console.log("token:", token);
    setToken(token.token);
  };

  return (
    <div className="login-wrapper">
      <h2> Please login</h2>
      <form>
        <label>
          <p>Username</p>
          <input name="UserName" type="text" onChange={handleChange} />
        </label>
        <label>
          <p>Password</p>
          <input name="Password" type="password" onChange={handleChange} />
        </label>
        <table>
          <tr>
            <td>
              <button onClick={handleSignup}>Sign-Up</button>
            </td>
            <td>
              <button onClick={handleSignin}>Sign-In</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default DPSTMLoginForm;

DPSTMLoginForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};

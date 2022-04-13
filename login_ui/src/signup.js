import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

export default function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/signin", data)
      .then((response) => {
        alert(response.data);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign Up</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input
                type="text"
                placeholder="Email"
                name="username"
                onChange={handleChange}
                value={data.username}
                required
              />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                placeholder="min-6"
                onChange={handleChange}
                value={data.password}
                name="password"
                required
              />
            </div>
            <div className="button-container">
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

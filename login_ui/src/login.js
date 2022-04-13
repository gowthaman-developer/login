import React, { useState } from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

export default function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/login", data)
      .then((response) => alert(response.data))
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
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
              <input type="submit" />
            </div>
            <div className="button-container">
              <Link to="/signup" className="link">
                {" "}
                signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

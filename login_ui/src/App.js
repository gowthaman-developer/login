import React, { useState } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Login from "./login";
import Signup from "./signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

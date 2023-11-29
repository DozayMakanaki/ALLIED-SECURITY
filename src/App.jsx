import React from "react";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    <Route path="/submit" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

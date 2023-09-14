import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";

const Routing: React.FC = () => {
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/app" element={<App />} />
    </Routes>
  )
}

export default Routing;
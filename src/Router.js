import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/main/main";
import Login from "./components/login/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

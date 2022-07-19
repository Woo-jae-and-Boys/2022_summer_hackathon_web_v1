import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/main/main";
import SignUp from "./components/signUp/signUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="signUp" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
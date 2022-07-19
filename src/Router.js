import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/main/main";
import DetailPage from "./components/detailPage/detailPage";
import Nav from "./components/common/nav/nav";

import CreateContent from "./components/createContent/createContent";

import Login from "./components/login/login";
import SignUp from "./components/signUp/signUp";


const Router = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== ("/signin" && "/signup") && <Nav />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detailpage" element={<DetailPage />} />

        <Route path="/createcontent" element={<CreateContent />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />

      </Routes>
    </>
  );
};

export default Router;

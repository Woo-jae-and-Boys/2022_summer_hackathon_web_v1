import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/main/main";
import DetailPage from "./components/detailPage/detailPage";
import Nav from "./components/common/nav/nav";
import CPC from "./components/createContent/createProjectContent";
import Login from "./components/login/login";
import SignUp from "./components/signUp/signUp";
import CEC from "./components/createContent/createErrandsContent";

const Router = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/signin" && pathname !== "/signup" && <Nav />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detailpage" element={<DetailPage />} />
        <Route path="/cpc" element={<CPC />} />
        <Route path="/cec" element={<CEC />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;

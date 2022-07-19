import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/main/main";
import DetailPage from "./components/detailPage/detailPage";
import Nav from "./components/common/nav/nav";

const Router = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== ("/signin" && "/signup") && <Nav />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detailpage" element={<DetailPage />} />
      </Routes>
    </>
  );
};

export default Router;
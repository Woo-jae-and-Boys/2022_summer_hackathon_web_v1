import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/main/main";
import DetailPage from "./components/detailPage/detailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detailPage" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

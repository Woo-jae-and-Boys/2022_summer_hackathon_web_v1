import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/main/main";
import DetailPage from "./components/detailPage/detailPage";
import Nav from "./components/common/nav/nav";
import CPC from "./components/createContent/createProjectContent";
import Login from "./components/login/login";
import SignUp from "./components/signUp/signUp";
import CEC from "./components/createContent/createErrandsContent";
import CDC from "./components/createContent/createDeliveryContent";
import ErrandsDetail from "./components/detailPage/errandsDetail";
import DeliveryDetail from "./components/detailPage/deliveryDetail";

const Router = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/signin" && pathname !== "/signup" && <Nav />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detailpage/:id" element={<DetailPage />} />
        <Route path="/errandsdetail/:id" element={<ErrandsDetail />} />
        <Route path="/deliverydetail/:id" element={<DeliveryDetail />} />
        <Route path="/create/project" element={<CPC />} />
        <Route path="/create/errands" element={<CEC />} />
        <Route path="/create/delivery" element={<CDC />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;

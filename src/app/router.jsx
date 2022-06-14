import React from "react";
import { Route, Routes } from "react-router-dom";
import Base from "pages/layout/base";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Base />}></Route>
    </Routes>
  );
};

export default Router;

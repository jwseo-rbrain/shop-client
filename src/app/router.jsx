import React from "react";
import { Route, Routes } from "react-router-dom";
import Base from "pages/layout/base";
import Login from "pages/auth/login";
import Auth from "pages/auth";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Base />}></Route>
      {/* 로그인 */}
      <Route path="/auth" element={<Auth />}>
        <Route index element={<Login />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;

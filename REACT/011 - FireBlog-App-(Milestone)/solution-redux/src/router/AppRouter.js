import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Login } from "../pages/LoginRegister";
import { Register } from "../pages/LoginRegister";
import Dashboard from "../pages/Dashboard";
import UpdateBlog from "../pages/UpdateBlog";
import Detail from "../pages/Detail";

import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="/new-blog" element={<PrivateRouter />}>
          <Route path="" element={<NewBlog />} />
        </Route>
        <Route path="/update-blog/:id" element={<PrivateRouter />}>
          <Route path="" element={<UpdateBlog />} />
        </Route>
        <Route path="/detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

import React from "react";
import { Routes, Route } from "react-router-dom";
// ...

import Auth from "../pages/Auth";
import DashboardRoutes from "./DashboardRoutes";
import NotFound from "../pages/NotFound";
import { o } from "framer-motion/dist/types.d-Cjd591yU";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/dashboard/*" element={<DashboardRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;o


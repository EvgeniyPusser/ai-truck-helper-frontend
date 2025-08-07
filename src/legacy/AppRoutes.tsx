import React from "react";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<div>Login Page</div>} />
      <Route path="/dashboard/*" element={<div>Dashboard</div>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;

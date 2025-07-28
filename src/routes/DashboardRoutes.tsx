import React from "react";
import { Routes, Route } from "react-router-dom";

import ClientDashboard from "../pages/Dashboard/ClientDashboard";
import MoverDashboard from "../pages/Dashboard/MoverDashboard";
import TruckOwnerDashboard from "../pages/Dashboard/TruckOwnerDashboard";
import HelperDashboard from "../pages/Dashboard/HelperDashboard";
import AgentDashboard from "../pages/Dashboard/AgentDashboard";
import NotFound from "../pages/NotFound"; // fallback на случай ошибки

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard/client" element={<ClientDashboard />} />
      <Route path="/dashboard/mover" element={<MoverDashboard />} />
      <Route path="/dashboard/truck-owner" element={<TruckOwnerDashboard />} />
      <Route path="/dashboard/helper" element={<HelperDashboard />} />
      <Route path="/dashboard/agent" element={<AgentDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default DashboardRoutes;

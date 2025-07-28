// Placeholder file for project structureimport React from "react";
import { useUserStore } from "../store/useUserStore";
import ClientDashboard from "./Dashboard/ClientDashboard";
import MoverDashboard from "./Dashboard/MoverDashboard";
import TruckOwnerDashboard from "./Dashboard/TruckOwnerDashboard";
import HelperDashboard from "./Dashboard/HelperDashboard";
import AgentDashboard from "./Dashboard/AgentDashboard";

const Dashboard = () => {
  interface User {
    role: "client" | "mover" | "truckOwner" | "helper" | "agent";
    // Add other user properties as needed
  }

  interface UserStore {
    user: User | null;
    // Add other store properties/methods as needed
  }

  const user = useUserStore((state: UserStore) => state.user);

  if (!user) return <div>Unauthorized</div>;

  switch (user.role) {
    case "client":
      return <ClientDashboard />;
    case "mover":
      return <MoverDashboard />;
    case "truckOwner":
      return <TruckOwnerDashboard />;
    case "helper":
      return <HelperDashboard />;
    case "agent":
      return <AgentDashboard />;
    default:
      return <div>Role not recognized</div>;
  }
};

export default Dashboard;

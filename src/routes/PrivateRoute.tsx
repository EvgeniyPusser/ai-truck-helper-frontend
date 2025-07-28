
import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";

interface PrivateRouteProps {
  allowedRoles: string[];
  children: ReactNode;
}

const PrivateRoute = ({ allowedRoles, children }: PrivateRouteProps) => {
  interface User {
    role: string;
    // Add other user properties if needed
  }

  const user: User | null = useUserStore((state: { user: User | null }): User | null => state.user);

  if (!user) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(user.role))
    return <Navigate to="/unauthorized" replace />;

  return <>{children}</>;
};

export default PrivateRoute;


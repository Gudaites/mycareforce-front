import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../hooks/user";

interface PrivateRouteProps {
  isPrivate?: boolean;
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isPrivate = false,
  element,
}) => {
  const { user } = useUser();
  const location = useLocation();

  if (isPrivate && !user) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  if (!isPrivate && user) {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }
  return element;
};

export default PrivateRoute;

import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import PrivateRoute from "./Route";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const Routes: React.FC = () => (
  <Switch>
    <Route
      path="/"
      element={<PrivateRoute isPrivate={false} element={<Login />} />}
    />
    <Route
      path="/dashboard"
      element={<PrivateRoute isPrivate={true} element={<Dashboard />} />}
    />
  </Switch>
);

export default Routes;

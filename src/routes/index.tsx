import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import PrivateRoute from "./Route";

import Login from "../pages/Login";

const Routes: React.FC = () => (
  <Switch>
    <Route
      path="/"
      element={<PrivateRoute isPrivate={false} element={<Login />} />}
    />
    <Route
      path="/dashboard"
      element={<PrivateRoute isPrivate={true} element={<h1 />} />}
    />
  </Switch>
);

export default Routes;

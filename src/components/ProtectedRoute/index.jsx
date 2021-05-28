import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, component, exact }) => {
  const condition = useSelector((state) => state?.auth?.isAuthorized);

  return condition ? (
    <Route path={path} exact={exact}>
      {component}
    </Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;

import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import { publicRoutes, privateRoutes, Routes } from "../../constants/routes";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {publicRoutes.map((route) => (
          <Route exact path={route.path} key={route.path}>
            {route.component}
          </Route>
        ))}
        {privateRoutes.map((route) => (
          <ProtectedRoute path={route.path} component={route.component} key={route.path} exact />
        ))}
        <Redirect to={Routes.SignIn} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

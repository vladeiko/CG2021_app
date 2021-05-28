import React from "react";
import SigninPage from "../pages/Signin";
import SignupPage from "../pages/Signup";
import TestAuthorizedPage from "../pages/TestAuthorizedPage";
import SelectConsolePage from "../pages/SelectConsole";
import ProfilePage from "../pages/Profile";

export const Routes = {
  Home: "/",
  SignIn: "/signin",
  SignUp: "/signup",
  TestAuthorized: "/testauth",
  SelectConsole: "/select-console",
  Profile: "/profile",
};

export const publicRoutes = [];
export const privateRoutes = [];

const createPublicRoute = (path, component) => {
  publicRoutes.push({ path, component });
};
const createPrivateRoute = (path, component) => {
  privateRoutes.push({ path, component });
};

createPublicRoute(Routes.SignIn, <SigninPage />);
createPublicRoute(Routes.SignUp, <SignupPage />);
createPrivateRoute(Routes.TestAuthorized, <TestAuthorizedPage />);
createPrivateRoute(Routes.SelectConsole, <SelectConsolePage />);
createPrivateRoute(Routes.Profile, <ProfilePage />);

import React from "react";
import SigninPage from "../pages/Signin";
import SignupPage from "../pages/Signup";
import ProfilePage from "../pages/Profile";
import MainPage from "../pages/Main";
import QuestionsPage from "../pages/Questions";

export const Routes = {
  Home: "/",
  SignIn: "/signin",
  SignUp: "/signup",
  TestAuthorized: "/testauth",
  Profile: "/profile",
  Test: "/test",
  Main: "/main",
  Questions: "/questions",
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
createPublicRoute(Routes.Questions, <QuestionsPage />);
createPublicRoute(Routes.Main, <MainPage />);
createPrivateRoute(Routes.Profile, <ProfilePage />);

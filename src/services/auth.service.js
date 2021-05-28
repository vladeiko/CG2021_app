import httpService from "./http.service";

const authUrl = "/auth";

const SignIn = (values) =>
  httpService
    .post(`${authUrl}/signin`, { data: values })
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

const SignUp = (values) =>
  httpService
    .post(`${authUrl}/signup`, { data: values })
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

export default {
  SignIn,
  SignUp,
};

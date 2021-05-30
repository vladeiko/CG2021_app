import httpService from "./http.service";

const questionsUrl = "/questions";

const GetAllPosts = () =>
  httpService
    .get(`${questionsUrl}/`, {})
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

const GetFullData = (id) =>
  httpService
    .get(`${questionsUrl}/${id}`, {})
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

export default {
  GetAllPosts,
  GetFullData,
};

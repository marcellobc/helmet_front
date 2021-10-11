import axios from "axios";
import toast from "../../../functions/toast";
import session from "../../../functions/session";

const api = axios.create({
  baseURL: process.env.REACT_APP_HELMET_API_URL,
  headers: {
    Authorization: `Bearer ${session.getJWT()}`,
  },
});

api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const errorStatus = error?.response?.status;
    const errorMessage = error?.response?.data?.message?.[0];

    if (errorStatus === 401) session.end();
    if (errorStatus === 403) session.end();

    if (!errorMessage) {
      toast.error("Serviço indisponível no momento");
    } else {
      toast.error(errorMessage);

      return null;
    }
  }
);

const post = async (url, body) =>
  api.post(url, body, {
    headers: { Authorization: `Bearer ${session.getJWT()}` },
  });

const patch = async (url, body) =>
  api.patch(url, body, {
    headers: { Authorization: `Bearer ${session.getJWT()}` },
  });

const get = async (url) =>
  api.get(url, { headers: { Authorization: `Bearer ${session.getJWT()}` } });

const remove = async (url) =>
  api.delete(url, { headers: { Authorization: `Bearer ${session.getJWT()}` } });

export default { get, post, patch, remove };

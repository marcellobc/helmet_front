import axios from "axios";
import toast from "../../../functions/toast";

const api = axios.create({
  baseURL: process.env.REACT_APP_HELMET_API_URL,
});

api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const errorMessage = error?.response?.data ?? "Serviço indisponível";
    toast.error(errorMessage);
    return null;
  }
);

export default api;

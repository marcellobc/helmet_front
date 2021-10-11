import api from "./api";

const findAll = async (params) => {
  return api.get("/users", { params });
};

export default { findAll };

import api from "./api";

const findById = async (id) => api.get(`/users/${id}`);

const findAll = async (params) => {
  return api.get("/users", { params });
};

export default { findAll, findById };

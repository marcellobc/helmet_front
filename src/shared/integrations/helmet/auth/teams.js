import api from "./api";

const findAllByUserId = async (userId, params) => {
  return api.get(`/teams/${userId}`, { params });
};

const findAll = async (params) => {
  return api.get("/teams", { params });
};

const edit = async (id, body) => {
  return api.patch(`/teams/${id}`, body);
};

const remove = async (id) => {
  return api.remove(`/teams/${id}`);
};

export default { findAllByUserId, findAll, edit, remove };

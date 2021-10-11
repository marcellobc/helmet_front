import api from "./api";

const findAll = async (params) => {
  return api.get("/roles", { params });
};

const edit = async (id, body) => {
  return api.patch(`/roles/${id}`, body);
};

const remove = async (id) => {
  return api.remove(`/roles/${id}`);
};

export default { findAll, edit, remove };

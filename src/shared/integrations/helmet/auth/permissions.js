import api from "./api";

const findAll = async (params) => {
  return api.get("/permissions", { params });
};

export default { findAll };

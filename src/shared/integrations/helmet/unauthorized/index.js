import api from "./api";

const login = async (payload) => api.post("/users/login", payload);

const register = async (payload) => api.post("/users/signup", payload);

// const forgotPassword = async (email) => api.get(`/users/changepass/${email}`);

const forgotPassword = async (email) => 123;

export default { login, register, forgotPassword };

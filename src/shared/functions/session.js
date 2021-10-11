// import helmet from "../integrations/helmet";

const JWT_KEY = "accessToken";
const LOGGED_USER_KEY = "loggedUser";

const get = (key) => {
  return JSON.parse(localStorage.getItem(key) ?? null);
};

const set = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

const remove = (key) => {
  return localStorage.removeItem(key);
};

const getJWT = () => {
  return get(JWT_KEY);
};

const start = ({ token, id, name }) => {
  set(JWT_KEY, token);
  set(LOGGED_USER_KEY, { id, name });
};

const end = () => {
  remove(JWT_KEY);
  remove(LOGGED_USER_KEY);
};

const getData = () => {
  return { [LOGGED_USER_KEY]: get(LOGGED_USER_KEY) };
};

const validateSession = () => {
  return !!getJWT();
};

export default { start, end, getData, getJWT, validateSession };

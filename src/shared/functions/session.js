import helmet from "../integrations/helmet";

const JWT_KEY = "accessToken";
const LOGGED_USER_KEY = "loggedUser";
const TEAMS_KEY = "teams";

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

const enableJWT = (token) => {
  set(JWT_KEY, token);
};

const start = ({ token, user, teams }) => {
  set(JWT_KEY, token);
  set(LOGGED_USER_KEY, user);
  set(TEAMS_KEY, teams);
};

const end = () => {
  remove(JWT_KEY);
  remove(LOGGED_USER_KEY);
};

const getData = () => {
  return {
    [LOGGED_USER_KEY]: get(LOGGED_USER_KEY),
    [TEAMS_KEY]: get(TEAMS_KEY),
  };
};

const validateSession = () => {
  return !!getJWT();
};

export default { enableJWT, start, end, getData, getJWT, validateSession };

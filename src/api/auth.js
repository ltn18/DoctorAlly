import axios from "../config/axios";

export const login = (username, password, role) =>
  axios
    .post("/auth/login", {
      username,
      password,
      role
    })
    .then((res) => res.data);

export const register = (username, password, role) =>
  axios
    .post("/auth/register", {
      username,
      password,
      role
    })
    .then((res) => res.data);

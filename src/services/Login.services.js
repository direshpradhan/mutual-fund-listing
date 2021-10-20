import axios from "axios";

export const loginService = async (email, password) => {
  return axios.post("https://mutual-fund.pdiresh.repl.co/login", {
    email,
    password,
  });
};

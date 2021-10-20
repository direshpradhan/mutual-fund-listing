import axios from "axios";

export const signupService = (userDetails) => {
  return axios.post("https://mutual-fund.pdiresh.repl.co/signup", {
    signupData: userDetails,
  });
};

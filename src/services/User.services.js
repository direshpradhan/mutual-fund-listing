import axios from "axios";

export const updateUserDataService = (userDetails) => {
  return axios.post("https://mutual-fund.pdiresh.repl.co/user", {
    updatedData: userDetails,
  });
};

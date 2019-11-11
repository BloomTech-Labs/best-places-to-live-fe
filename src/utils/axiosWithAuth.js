import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://protected-plains-68406.herokuapp.com/",
    headers: {
      Authorization: token
    }
  });
};

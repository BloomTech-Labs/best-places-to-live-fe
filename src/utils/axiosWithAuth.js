import axios from "axios";
export const baseURL = "https://bestplacesbe-test.herokuapp.com/";
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: token
    }
  });
};

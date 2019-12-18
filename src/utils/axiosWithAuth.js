import axios from "axios";

//baseUrl - test branch runs on local host, production branch runs on netlify - make an OR operator in ENV file?
export const baseURL = "https://bestplacesbe-test.herokuapp.com/";

//Makes axios call and send token if existing
export const axiosWithAuth = () => {
  const token = sessionStorage.getItem("token");
  return axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: token
    }
  });
};

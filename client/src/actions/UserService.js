import axios from "axios";
import authHeader from "./AuthHeader";

const BASE_URL = "http://localhost:8000/";

const getPublicContent = () => {
  return axios.get(API_URL);
};

const getUserCal = () => {
  return axios.get(API_URL + "user-cal", { headers: authHeader() });
};

const getRecCenterCal = () => {
    return axios.get(API_URL + "rec-center", { headers: authHeader() });
}

export default {
  getPublicContent,
  getUserCal,
  getRecCenterCal
};
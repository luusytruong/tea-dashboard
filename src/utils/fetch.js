import axios from "axios";
import { API_URL } from "./var";

export const fetchGet = async (endpoint) => {
  try {
    const res = await axios.get(API_URL + endpoint);
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const fetchPost = async (endpoint, data) => {
  try {
    const res = await axios.post(API_URL + endpoint, data);
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

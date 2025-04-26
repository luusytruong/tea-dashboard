import { API_URL } from "./var";

export const fetchGet = async (endpoint) => {
  try {
    const res = await fetch(API_URL + endpoint);
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

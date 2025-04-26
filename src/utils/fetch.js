import { API_URL } from "./var";

export const fetchGet = async (endpoint) => {
  try {
    const res = await fetch(API_URL + endpoint, {
      next: { revalidate: 60 },
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const fetcher = (url) => fetch(url).then((res) => res.json());
export default fetcher;

export const fetchGET = async (endpoint = "") => {
  try {
    const res = await fetch(endpoint);
    return await res.json();
  } catch (err) {
    console.error("Error GET data:", err);
    return { status: false, message: err.message };
  }
};

export const fetchPOST = async (endpoint = "", data = {}) => {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.error("Error POST data:", err);
    return { status: false, message: err.message };
  }
};

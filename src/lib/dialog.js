let showDialog = null;

export const dialog = {
  register(fn) {
    showDialog = fn;
  },
  confirm(message) {
    return new Promise((resolve) => {
      if (typeof showDialog === "function") {
        showDialog({ message, resolve });
      } else {
        resolve(0); // fallback
      }
    });
  },
};

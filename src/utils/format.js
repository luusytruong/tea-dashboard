export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("vi-VN");
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

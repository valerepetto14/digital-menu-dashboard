import api from "./config";

export const getProducts = () => {
  return api.get("/products?limit=10");
};

export const searchedProducts = async (searchData, status = "") => {
  return api.get(`/products/search?word=${searchData}&status=${status}`);
};

import api from "./config";

export const getProducts = (page) => {
  return api.get(`/products?limit=10&page=${page}`);
};

export const searchedProducts = async (searchData, status = "") => {
  if (searchData === "" && status === "") {
    return api.get("/products?limit=10");
  }
  return api.get(`/products/search?word=${searchData}&status=${status}`);
};

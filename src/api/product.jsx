import api from "./config";

export const getProducts = () => {
  return api.get("/products");
};

export const searchedProducts = async (searchData, status = '') => {
  return api.get(`/products/search?word=${searchData}&status=${status}`)
}



import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  lastPage: 0,
  setProducts: (newProducts) => set({ products: newProducts }),
  moreProducts: (moreData) =>
    set((state) => ({ products: [...state.products, ...moreData] })),
  setLastPage: (page) => set({ lastPage: page }),
}));

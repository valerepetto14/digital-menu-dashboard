import api from "../api/config";
import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [ ],
    setProducts: (newProducts) => set({ products: newProducts }) 
}))

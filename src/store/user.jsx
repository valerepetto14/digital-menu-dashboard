import { create } from "zustand";

export const userStore = create((set) => ({
  isAuth: false,
  setAuth: (isAuth) => set({ isAuth }),

  user: null,
  setUser: (user) => set({ user }),
}));

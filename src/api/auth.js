import api from "./config";

export const signIn = (data) => api.post("/auth/signin", data);

export const checkAuth = () => api.get("/auth/checkAuth");

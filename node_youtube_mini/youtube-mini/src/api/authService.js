import apiClient from "./apiClient";

export const login = async (payload) => {
  try {
    const response = await apiClient.post("/auth/login", payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

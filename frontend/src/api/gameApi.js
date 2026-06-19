import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const startNewGame = async () => {
  try {
    const response = await api.post("/new");
    return response.data;
  } catch (error) {
    console.error("Error starting new game:", error);
    throw error;
  }
};

export const hitCard = async (game) => {
  try {
    const response = await api.post("/hit", game);
    return response.data;
  } catch (error) {
    console.error("Error hitting:", error);
    throw error;
  }
};

export const standCard = async (game) => {
  try {
    const response = await api.post("/stand", game);
    return response.data;
  } catch (error) {
    console.error("Error standing:", error);
    throw error;
  }
};

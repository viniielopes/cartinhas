import axios from "axios";

export const cardsAPI = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.CARDS_API
      : "http://localhost:3001",
});

import axios from "axios";

export const cardsAPI = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_CARDS_API
      : "http://localhost:3001",
});

import api from "./api.service.js";

export const getJoke = async () => {
  const res = await api.get("/jokes/random");
  return res.data.data;
}

export const createJoke = async (jokes) => {
  const res = await api.post("/jokes", jokes)
  return res.data
}

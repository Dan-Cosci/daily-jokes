import axios from "axios"
import { config } from "../config/config.js"

const api = axios.create({
  baseURL: config.apiUri,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  }
})

export default api

import axios from "axios";

const api = axios.create({
  baseURL: "https://clinica-backend-948a8bfe4294.herokuapp.com/",
});

export default api;
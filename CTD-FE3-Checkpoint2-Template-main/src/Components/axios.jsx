import axios from "axios";

const api = axios.create({
  baseURL: "https://dhodonto.ctdprojetos.com.br/dentista?matricula=c3e6cf30-dccc-4e21-935a-8efe9344677e",
});

export default api;
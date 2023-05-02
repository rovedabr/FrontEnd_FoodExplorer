import axios from "axios";

export const api = axios.create({
  // baseURL:"https://rvd-foodexplorer-api.onrender.com"
  baseURL: "http://localhost:3333" //somente para uso local
});


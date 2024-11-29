import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export function setAuthToken(token?: string) {
  if (token) {
    apiInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete apiInstance.defaults.headers["Authorization"];
  }
}

export default apiInstance;

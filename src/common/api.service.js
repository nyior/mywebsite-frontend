import { CSRF_TOKEN } from "./csrf_token.js";
import axios from "axios";

// http://127.0.0.1:8000/ 
const API_URL = "https://still-reef-45949.herokuapp.com/api/v1";

const APP_BASE_URL = "https://nyior-clement.netlify.app";

function apiService(endpoint, method, data) {
  endpoint = `${API_URL}/${endpoint}`;

  const config = {
    url: endpoint,
    method: method,
    data: data !== undefined ? data : null,
    headers: {
      "content-type": "application/json",
      // "X-CSRFTOKEN": CSRF_TOKEN
    }
  };

  return axios(config).then(response => response.data);
}

export { apiService };
export { APP_BASE_URL };

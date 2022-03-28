import axios from "axios";

//URL para la API del DB.JSON
export const API_URL = axios.create({
    baseURL:"http://localhost:4000"
});

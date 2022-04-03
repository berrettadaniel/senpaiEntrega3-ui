import axios from "axios";

//URL para la API del DB.JSON
export const api = axios.create({
    baseURL:"http://localhost:4000"
});

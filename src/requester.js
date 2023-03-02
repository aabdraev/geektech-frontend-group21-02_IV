import axios from "axios";


export const $api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 5000,
    headers: { 'X-Custom-Header': 'moobar' }
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = "bearer auth"
    config.headers.Accept = "Application/json"
    return config;
});
import axios from "axios";

const ApiManager = axios.create({
    baseURL:"https://farhancollection.id/rest_api/",
    responseType: 'json',
    withCredentials: true,
});

export default ApiManager;
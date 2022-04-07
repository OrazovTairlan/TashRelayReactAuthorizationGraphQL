import axios from "axios";

const $api = axios.create({
    withCredentials: false // For some reason requests breaks up because CORS
})


export default $api;

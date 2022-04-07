import axios from "axios";
import {isAuthError, isNotValidCredentials} from "../../utils/auth";
import {CustomResponse} from "../../types/axios/axios";
import history from "../../utils/history";
import UserService from "../User/UserService";

const $api = axios.create({
    withCredentials: false // For some reason requests breaks up because CORS
})


$api.interceptors.request.use((config) => {
    if (sessionStorage.getItem("accessToken") !== null) {
        config.headers!["Authorization"] = `Bearer ${sessionStorage.getItem("accessToken")}`;
    }
    return config;
})


// @ts-ignore
$api.interceptors.response.use(async (config: CustomResponse) => {
    if (config.data.errors == undefined) { // if error property does not exist return response
        return config;
    }
    console.log(config, "error");
    if (isNotValidCredentials(config)) {
        throw Error("Неверный пароль или введена неверная почта");
        return;
    }
    const originalRequest = config.config;
    if (isAuthError(config) && config.config && !config.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await UserService.refreshToken();
            if (response.data.errors == undefined) {
                UserService.setToken("accessToken", response.data.data.users.refresh.accessToken);
                return $api.request(originalRequest);
            }
            if (isAuthError(response)) {
                history.replace("/login");
                return;
            }
            UserService.setToken("accessToken", response.data.data.users.refresh.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log(e)
        }
    }
    if (isAuthError(config)) {
        history.replace("/login");
    }
    return config;
}, async (error) => {
    history.replace("/error");
    throw error;
})

export default $api;

import {Mutation} from "../../types/User/auth";
import {authLoginMutation$data} from "../../graphql/Auth/mutations/__generated__/authLoginMutation.graphql";
import axios from "axios";
import {LOGOUT, LOGOUT_NOT_PARSED, REFRESH_TOKEN_NOT_PARSED} from "../../graphql/Auth/mutations/auth";
import {API_URL} from "../../utils/common";
import {authLogoutMutation$data} from "../../graphql/Auth/mutations/__generated__/authLogoutMutation.graphql";
import {WithoutNullableKeys} from "../../types/common/common";
import $api from "../http/http";

export default class UserService {
    static setTokens(response: authLoginMutation$data, callback: (...args: any[]) => void): void {
        sessionStorage.setItem("accessToken", (response as unknown as Mutation).users.login.token.accessToken);
        sessionStorage.setItem("refreshToken", (response as unknown as Mutation).users.login.token.refreshToken);
        callback();
    }

    static async logout(callback: (...args: any[]) => void) {
        const response = await $api.post(API_URL, {
            query: LOGOUT_NOT_PARSED,
            variables: {
                refreshToken: `${this.getToken("accessToken")}`
            }
        });
        console.log(response);
        if (Boolean(response.data.data.users.logout)) {
            sessionStorage.removeItem("accessToken");
            sessionStorage.removeItem("refreshToken");
            callback();
            return;
        }
        throw Error(JSON.stringify({error: "По некоторым причинам, пользователю не получилось выйти из аккаунта"}));
    }

    static async refreshToken() {
        const response = await $api.post<any>(API_URL, {
            query: REFRESH_TOKEN_NOT_PARSED,
            variables: {
                refreshToken: `${this.getToken("accessToken")}`
            }
        });
        return response;
    }

    static getToken = (key: string) => {
        return sessionStorage.getItem(key);
    }

    static setToken = (key: string, value: string) => {
        return sessionStorage.setItem(key, value);
    }
}

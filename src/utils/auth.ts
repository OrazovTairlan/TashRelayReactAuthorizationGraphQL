import {AxiosResponse} from "axios";
import {INVALID_TOKEN} from "./common";

export function isAuthError(response: AxiosResponse): Boolean {
    if (response.data.errors.length > 0) {
        return response.data.errors.some((item: { [x: string]: any }) => {
            return Object.values(item).some((value) => {
                return value == INVALID_TOKEN;
            })
        })
    }
    return false;
}


import {AxiosResponse} from "axios";

export type CustomResponse = AxiosResponse & {
    config: {
        _isRetry: Boolean;
    }
}

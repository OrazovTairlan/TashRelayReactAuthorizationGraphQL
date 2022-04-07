import {AxiosResponse} from "axios";

export type WithoutNullableKeys<Type> = {
    [Key in keyof Type]-?: WithoutNullableKeys<NonNullable<Type[Key]>>;
};

export type CustomResponse = AxiosResponse & {
    config: {
        _isRetry: Boolean;
    }
}

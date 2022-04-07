import React, {FC, useContext} from 'react';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import Input from "../Input/Input";
import {useMutation} from "react-relay";
import {LOGIN} from "../../graphql/Auth/mutations/auth";
import type {LoginInput} from "../../types/User/auth";
import {authLoginMutation} from "../../graphql/Auth/mutations/__generated__/authLoginMutation.graphql";
import UserService from "../../services/User/UserService";
import {useFormSchema} from "./hooks/useFormSchema";
import {RootStoreContext} from "../../store/rootStore";
import {history} from "../../utils/history";

const LoginForm: FC = () => {
    const {register, handleSubmit, formState: {errors}} = useFormSchema();
    const [login, isLoading] = useMutation<authLoginMutation>(LOGIN);
    const rootStore = useContext(RootStoreContext);
    const onSubmit = async (data: LoginInput) => {
        login({
            variables: {
                email: "user@example.com", password: "user123#"
            },
            onCompleted: (data) => {
                UserService.setTokens(data, () => {
                    rootStore.UserStore.changeStatusToken(true);
                    history.replace("/views");
                });
            }
        })
    }
    return (
        <div>
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Авторизация</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <Input register={register("email")} placeholder={"Email"} type={"text"} label={"Почта"}
                                       errors={errors.email}/>
                            </div>
                            <div>
                                <Input register={register("password")} placeholder={"Пароль"} type={"text"}
                                       label={"Пароль"} errors={errors.password}/>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-white text-black opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {isLoading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-800"
                                                   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>}
                                Авторизация
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;

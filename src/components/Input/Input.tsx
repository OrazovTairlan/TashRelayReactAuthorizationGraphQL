import React, {FC, HTMLAttributes} from 'react';
import {UseFormRegisterReturn} from "react-hook-form/dist/types/form";
import {FieldErrors} from "react-hook-form";

interface IProps extends HTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder: string;
    type: "text" | "number" | "email" | "password";
    register: UseFormRegisterReturn;
    errors: FieldErrors<any>
}

const Input: FC<IProps> = ({label, placeholder, type, register, errors}) => {
    return (
        <>
            <div className="text-sm font-bold text-white tracking-wide">{label}</div>
            <input className="w-full bg-transparent text-lg py-2 border-b border-gray-300 text-white focus:outline-none focus:border-indigo-500"
                   type={type} placeholder={placeholder} {...register}/>
            {errors?.message?.length > 0 ? <p className="text-red-400 m-2">{errors.message}</p> : null}
        </>
    );
};

export default Input;

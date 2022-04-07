import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "../../../schemas/LoginForm/validationSchema";

export const useFormSchema = () => {
    const result = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {email: "", password: ""}
    });
    return result;
};

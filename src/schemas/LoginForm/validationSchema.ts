import * as yup from 'yup';

export const validationSchema = yup.object({
    email: yup
        .string()
        .email("Введите почту")
        .required('Это поле обязательное'),
    password: yup
        .string()
        .required('Это поле обязательное')
});

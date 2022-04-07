import React from 'react';
import LoginForm from "../components/Login/LoginForm";
import {Helmet} from "react-helmet";

const LoginLayout = () => {
    return (
        <div>
            <Helmet>
                <html lang="en"/>
                <title>Login page</title>
                <meta name="description" content="Login page"/>
            </Helmet>
            <LoginForm/>
        </div>
    );
};

export default LoginLayout;



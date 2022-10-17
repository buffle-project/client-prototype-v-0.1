// React core imports
import React from 'react';

// components imports
import TextBlock from "../../components/TextBlock/TextBlock";
import LoginForm from "../../components/Forms/LoginForm";

// utils imports
import { LoginText } from "../../utils/staticText";

function Login() {
    return (
        <>
            <div className='gradient-background-login'>
                <div className='wrapper'>
                    {/* Text block */}
                    <TextBlock textTitle={LoginText.title} textParagraph={LoginText.paragraph} />

                    {/* Login form */}
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default Login;
import React from 'react';

import "./signinpage.scss";
import SignIn from "../../component/sign-in/SignIn";
import SignUp from "../../component/sign-in/SignUp"

const SignInPage = ()=>{
    return(
        <div className="signin-page">
            <SignIn />
            <SignUp />
        </div>
    )
}
export default SignInPage;
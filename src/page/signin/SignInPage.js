import React from 'react';

import "./signinpage.scss";
import SignIn from "../../component/sign-in/SignIn";
import SignOut from "../../component/sign-in/SignOut"

const SignInPage = ()=>{
    return(
        <div className="signin-page">
            <SignIn />
            <SignOut />
        </div>
    )
}
export default SignInPage;
import React,{ useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from "../form-input/custom-button";
import { googleSigninStart,emailSigninStart } from "../../redux/action/user-action";
import "./sign-in.scss";

const SignIn = ({ signInWithEmail, signInWithGoogle }) => {
    const [userCredentials,setUserCredentials]=useState({email:'',password:''});
    const { email,password } = userCredentials;

    const handleSubmit =async event=>{
        event.preventDefault();
        signInWithEmail(email,password);
    }

    const handleChange=(e)=>{
        const {value,name} =e.target;
        setUserCredentials({...userCredentials,[name]:value})
    }

    return(
        <div className="sign-in">
            <h2> I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={handleChange}
                    label="email"
                    required 
                />
                <FormInput
                    type="password" 
                    name="password" 
                    value={password} 
                    handleChange={handleChange}
                    label="password"
                    required 
                />
                <div className="buttons">
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signInWithGoogle: () => dispatch(googleSigninStart()),
    signInWithEmail: (email,password) => dispatch(emailSigninStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);
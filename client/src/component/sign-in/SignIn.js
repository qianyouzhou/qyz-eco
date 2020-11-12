import React,{ useState } from 'react';
import {useForm} from 'react-hook-form';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput from '../form-input/form-input';
import CustomButton from "../form-input/custom-button";
import { selectErrorMessage } from "../../redux/reducer/user/user-selector";
import { googleSigninStart,emailSigninStart } from "../../redux/action/user-action";
import "./sign-in.scss";

const SignIn = ({ signInWithEmail, signInWithGoogle,signInError }) => {
    const [userCredentials,setUserCredentials]=useState({email:'',password:''});
    const { email,password } = userCredentials;
    const emailPattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordPattern = /^\d{6,}$/ ;
    const {register,errors,handleSubmit}=useForm({
        mode:"onBlur",
        reValidateMode:"onSubmit"
    });

    const onSubmit =async (data,event)=>{
        event.preventDefault();
        event.target.reset(); 
        console.log("data"+data)
        signInWithEmail(email,password)
        setUserCredentials({...userCredentials,email:'',password:''})
    }

    const handleChange=(e)=>{
        const {value,name} =e.target;
        console.log(userCredentials)
        setUserCredentials({...userCredentials,[name]:value})
        console.log(userCredentials)
    }

    return(
        <div className="sign-in">
            <h2> I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={handleChange}
                    label="email"
                    ref={register({
                        required:{
                            value:true,
                            message:"Email must not be empty"
                        },
                        minLength:{
                            value:3,
                            message:'Email address must longer than 3'
                        },
                        pattern: {
                            value: emailPattern,
                            message: (                        
                                "Email must be a valid email address"
                            ),
                          },
                        
                    })}
                />
                    {errors.email&&<p className="sign-in-error">{errors.email.message}</p>}
                <FormInput
                    type="password" 
                    name="password" 
                    value={password} 
                    handleChange={handleChange}
                    label="password"
                    ref={register({
                        required:{
                            value:true,
                            message:"Password must not be empty"
                        },
                        pattern: {
                            value: passwordPattern,
                            message: (                        
                                "Password must contain at least 1 Upper case and 1 special character"
                            ),
                          }
                    })}
                />
                    {errors.password&&<p className="sign-in-error">{errors.password.message}</p>}
                <p className="sign-in-error">{signInError?"the password and user doesn't match,please try again":null}</p>
                <div className="buttons">
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    signInError:selectErrorMessage
    //collectionsArray:selectCollectionsForMIHUO// 要删
  })

const mapDispatchToProps = dispatch => ({
    signInWithGoogle: () => dispatch(googleSigninStart()),
    signInWithEmail: (email,password) => dispatch(emailSigninStart({email,password}))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
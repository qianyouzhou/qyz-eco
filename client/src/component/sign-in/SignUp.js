import React,{ useState } from 'react';
import { connect } from 'react-redux';
import {useForm} from 'react-hook-form';

import FormInput from "../form-input/form-input";
import CustomButton from "../form-input/custom-button";
import { signUpStart } from "../../redux/action/user-action"

const SignUp = ({signUpStart}) => {

    const [userCredentials,setUserCredentials]=useState(
        {
            email:'',
            displayName:'',
            password:'',
            confirmPassword:''
        });
        const { displayName, email, password, confirmPassword } = userCredentials;
        const emailPattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const passwordPattern = /^\d{6,}$/ ;
        const {register,errors,handleSubmit}=useForm({
            mode:"onBlur",
            reValidateMode:"onSubmit"
        });

        const onSubmit =async (data,event)=>{
        event.preventDefault();
        console.log("data"+data);
        signUpStart({email, password, displayName});

    }

    const handleChange = (event) =>{
        const {name,value}=event.target
        setUserCredentials({...userCredentials,[name]:value});
    }

    return(
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    type="text" 
                    name="displayName" 
                    value={displayName} 
                    handleChange={handleChange}
                    label="Name"
                    required 
                />
                <FormInput
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={handleChange}
                    label="Email"
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
                    label="Password"
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
                <FormInput
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    handleChange={handleChange}
                    label="Confirm Password"
                    required 
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);
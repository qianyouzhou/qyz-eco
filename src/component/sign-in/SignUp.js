import React from 'react';
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input";
import CustomButton from "../form-input/custom-button";

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        const {email,password,displayName}=this.state;
        event.preventDefault();
        if(this.state.password!==this.state.confirmPassword){
            alert("password doesn't match");
            return;
        }
        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
        }catch(error){
            console.log(error.message);
        }

    }

    handleChange = (event) =>{
        const {name,value}=event.target
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text" 
                        name="displayName" 
                        value={this.state.displayName} 
                        handleChange={this.handleChange}
                        label="Name"
                        required 
                    />
                    <FormInput
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="Email"
                        required 
                    />
                    <FormInput
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="Password"
                        required 
                    />
                    <FormInput
                        type="password" 
                        name="confirmPassword" 
                        value={this.state.confirmPassword} 
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required 
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}
export default SignUp;
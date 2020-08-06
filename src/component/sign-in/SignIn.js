import React,{ Component } from 'react';

import FormInput from '../form-input/form-input';
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../form-input/custom-button";
import "./sign-in.scss";

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

    handleSubmit=async event=>{
        event.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''})
        }catch(error){
            console.log(error.message);
        }
    }

    handleChange=(e)=>{
        const {value,name} =e.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email"
                        required 
                    />
                    <FormInput
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="password"
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;
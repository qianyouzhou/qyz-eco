import React,{ Component } from 'react';

import FormInput from '../form-input/form-input';
import { signInWithGoogle } from "../../firebase/firebase.utils";
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

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({email:'',password:''})
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
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type="submit" onClick={signInWithGoogle}>Submit</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;
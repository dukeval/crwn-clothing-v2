import { useState } from "react";
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import './sign-in-form.style.scss';


const defaultFormFields = {
    email:'',
    password:'',
};

const SignInForm =()=>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    
    const resetFormFields =()=>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit= async(event)=>{
        //
        event.preventDefault();

        if(email==='' || password==='') return;

        try{
            const userCred = await signInAuthUserWithEmailAndPassword(email,password);

            if(userCred.user)
                alert("You're logged in!!");
            else
                alert("Invalid credentials")
            
            resetFormFields();
        }
        catch(err)
        {
            switch (err.code) {
                case "auth/wrong-password":
                    alert("You've entered an invalid password for that email.");
                    break;
                case "auth/user-not-found":
                    alert("No user is found for that email.");
                    break;            
                default:
                    console.log(err);
                    break;
            }
        }
    };

    const handleChange=(event)=>{
        const{name,value}= event.target

        setFormFields({...formFields,[name]:value});
    };

    const signInWithGoogle= async ()=>{
        await signInWithGooglePopup();
    };

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Email' 
                    inputOptions={{
                        type:"text", 
                        required:true, 
                        onChange:handleChange, 
                        name:'email', 
                        value:email
                    }} />
                <FormInput 
                    label='Password' 
                    inputOptions={{
                        type:"password", 
                        required:true, 
                        onChange:handleChange, 
                        name:'password', 
                        value:password
                    }} />
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonStyleType='google' onClick={signInWithGoogle}>Sign In With Google</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;
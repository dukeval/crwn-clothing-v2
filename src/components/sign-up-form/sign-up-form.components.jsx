import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/user.context";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import './sign-up-form.style.scss';

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
};
    
const SignUpForm = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    
    const resetFormFields =()=>{
        setFormFields(defaultFormFields);
    }

    const { setCurrentUser } = useContext(UserContext);

    const handleSubmit= async(event)=>{
        event.preventDefault();
        if(password !== confirmPassword) { console.log('Password mismatch'); return;}

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            //user.displayName = displayName;
            await createUserDocumentFromAuth(user, {displayName});

            setCurrentUser(user);

            resetFormFields();
        }
        catch(error){
            console.log('encountered an error while creating user ', error)
        }
    }

    const handleChange = (event)=>{
        console.log(event.target);
        const {name, value} = event.target;

        setFormFields({...formFields,[name]:value})
    };

    return(
    <div className="sign-up-container">
    <h2>Don't have an account?</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput 
                label='Display Name' 
                inputOptions={{
                    type:"text", 
                    required:true, 
                    onChange:handleChange, 
                    name:'displayName', 
                    value:displayName
                }} />
            <FormInput 
                label='Email' 
                inputOptions={{
                    type:"email", 
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
            <FormInput 
                label='Confirm Password' 
                inputOptions={{
                    type:"password", 
                    required:true, 
                    onChange:handleChange, 
                    name:'confirmPassword', 
                    value:confirmPassword
                }} />
            
            <Button type="submit">Sing Up</Button>
        </form>
    </div>
    )
}

export default SignUpForm;
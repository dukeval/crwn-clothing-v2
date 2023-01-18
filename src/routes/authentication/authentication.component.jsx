import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.components';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import './authentication.style.scss';

const Authentication = ()=>{    
    const logGoogleUser = async ()=>{
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
        console.log('I clicked the PopUp button');
    };

    return <div className='authentication-container'>        
        <SignInForm></SignInForm>
        <SignUpForm></SignUpForm>
    </div>
}

export default Authentication;
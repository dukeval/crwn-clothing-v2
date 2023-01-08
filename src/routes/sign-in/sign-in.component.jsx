import SignUpForm from '../../components/sign-up-form/sign-up-form.components';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = ()=>{    
    const logGoogleUser = async ()=>{
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
        console.log('I clicked the PopUp button');
    };

    return <div>
        <div>
            Sign In page
        </div>
        <button onClick={logGoogleUser}>Sign In with Popup</button>
        <SignUpForm></SignUpForm>
    </div>
}

export default SignIn;
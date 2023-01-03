import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = ()=>{
        const logGoogleUser = async ()=>{
            const {user} = await signInWithGooglePopup();
            createUserDocumentFromAuth(user);
        console.log('I clicked the button');
        }
    return <div>
        <div>
            Sign In page
        </div>
        <button onClick={logGoogleUser}>Sign In with Popup</button>
    </div>
}

export default SignIn;
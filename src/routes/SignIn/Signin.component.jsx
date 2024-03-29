import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"


export const SignIn =()=>{

    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>SignIn Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    )
}
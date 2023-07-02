import { signInWithGooglePopup , createUserDocumentFromAuth} from '../firebase.utils'
import Signup from '../Components/Signup';
import SignIn from '../Components/SignIn';
import './authentication.styles.scss'

const Authentication=()=>{
    return(
        <div className='authentication-container'>
            <SignIn/>
            <Signup/>
        </div> 
    )
}

export default Authentication; 
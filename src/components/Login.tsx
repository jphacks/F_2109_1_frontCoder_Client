import firebase from '../config/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/coding',
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
}

const Login = () => {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  )
}
export default Login

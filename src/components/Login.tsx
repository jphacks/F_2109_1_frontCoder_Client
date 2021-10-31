import firebase from '../config/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
}

const Login = (): JSX.Element => {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  )
}
export default Login

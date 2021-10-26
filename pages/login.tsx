import { GithubAuthProvider } from 'firebase/auth'
import firebase from '../config/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    {
      provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
}

function Login() {
  console.log('S')
  // var provider = new firebase.auth.GithubAuthProvider()
  // firebase
  //   .auth()
  //   .signInWithPopup(provider)
  //   .then((result) => {
  //     // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  //     const credential = GithubAuthProvider.credentialFromResult(result)
  //     const token = credential.accessToken

  //     // The signed-in user info.
  //     const user = result.user
  //     console.log(user)
  //     // ...
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code
  //     const errorMessage = error.message
  //     // The email of the user's account used.
  //     const email = error.email
  //     // The AuthCredential type that was used.
  //     const credential = GithubAuthProvider.credentialFromError(error)
  //     // ...
  //   })
  return (
    <div>
      <p>
        Welcome {firebase.auth().currentUser.displayName}! You are now
        signed-in!
      </p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  )
}

export default Login

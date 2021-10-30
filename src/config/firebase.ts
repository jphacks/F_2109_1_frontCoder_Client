// Import the functions you need from the SDKs you need
import { DoorBackOutlined } from '@mui/icons-material'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: 'AIzaSyA_A5aMoBBSMk6k9LWIB5t8lAB7DFuFMwE',
  authDomain: 'jphacks-2021.firebaseapp.com',
  projectId: 'jphacks-2021',
  storageBucket: 'jphacks-2021.appspot.com',
  messagingSenderId: '325023986059',
  appId: '1:325023986059:web:05119c17be9ecf5084ff8e',
})

export default firebase
export const db = firebase.firestore()
export const auth = firebase.auth()

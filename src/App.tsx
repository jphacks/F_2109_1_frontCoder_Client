import './App.css'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import firebase from './config/firebase'
import Competitions from './pages/CompetitionsList'
import RequireLogin from './pages/RequireLogin'
import Detail from './components/Detail'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Coding from './coding'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App(): JSX.Element {
  const [user, setUser] = useState(firebase.auth().currentUser)
  useEffect(
    () =>
      firebase.auth().currentUser === null
        ? firebase
            .auth()
            .onAuthStateChanged((user) => (user ? setUser(user) : <p></p>))
        : setUser(firebase.auth().currentUser),
    []
  )
  return (
    <>
      <ToastContainer position="top-center" autoClose={1500} />
      <Header user={user} />
      {user ? (
        <BrowserRouter>
          <Switch>
            <Route path="/coding">
              <Coding />
            </Route>
            <Route exact path="/competitions">
              <Competitions />
            </Route>
            <Route exact path="/problem">
              <Competitions />
            </Route>
            <Route path="/problem/:problemId">
              <Detail />
            </Route>
          </Switch>
        </BrowserRouter>
      ) : (
        <RequireLogin />
      )}
    </>
  )
}

export default App

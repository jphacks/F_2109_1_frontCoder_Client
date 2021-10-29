import './App.css'
import Header from './components/Header'
import React, { useEffect, useState } from 'react'
import firebase from './config/firebase'
import Competitions from './pages/CompetitionsList'
import RequireLogin from './pages/RequireLogin'
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Coding from './coding'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  let [userid, setUser] = useState(null)
  let [loginalert, setLoginalert] = useState(false)
  useEffect(
    () =>
      firebase
        .auth()
        .onAuthStateChanged((user: any) => (user ? setUser(user) : <p></p>)),
    []
  )
  return (
    <>
      <ToastContainer position="top-center" autoClose={1500} />
      <Header user={userid} />
      {!userid ? (
        <RequireLogin />
      ) : (
        <BrowserRouter>
          <Switch>
            <Route path="/coding">
              <Coding />
            </Route>
            <Route exact path="/competitions">
              <Competitions />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </>
  )
}

export default App

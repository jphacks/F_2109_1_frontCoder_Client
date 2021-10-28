import './App.css'
import Login from './components/Login'

// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Coding from './coding'
import Score from './score'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    // <Router>
    // <Route exact path="/">
    //<Login />
    // </Route>
    // </Router>
    <>
      <ToastContainer position="top-center" autoClose={1500} />
      <BrowserRouter>
        <Switch>
          <Route path="/coding">
            <Coding />
          </Route>
          <Route path="/score">
            <Score />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

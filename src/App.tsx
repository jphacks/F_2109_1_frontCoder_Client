import './App.css'
import Login from './components/Login'
import Detail from './components/Detail'

import Competitions from './pages/competitions'
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Coding from './coding'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={1500} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/problem">
            問題一覧
          </Route>
          <Route path="/problem/:problemId" children={<Detail />} />
          <Route path="/coding">
            <Coding />
          </Route>
          <Route exact path="/competitions">
            <Competitions />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

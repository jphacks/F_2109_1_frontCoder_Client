import './App.css'
import Competitions from './pages/CompetitionsList'
import Detail from './components/Detail'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Coding from './coding'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Auth from './function/Auth'
// Headerはauth情報が必要なため、authに格納.
function App(): JSX.Element {
  return (
    <>
      <ToastContainer position="top-center" autoClose={1500} />
      <BrowserRouter>
        <Auth>
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
        </Auth>
      </BrowserRouter>
    </>
  )
}

export default App

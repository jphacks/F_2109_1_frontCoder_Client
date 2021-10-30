import Score from './pages/score'
import Competitions from './pages/CompetitionsList'
import Detail from './components/Detail'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Coding from './pages/coding'
import Ranking from './pages/Ranking'
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
            <Route exact path="/">
              <Competitions />
            </Route>
            <Route exact path="/ranking">
              <Ranking />
            </Route>
            <Route path="/coding">
              <Coding />
            </Route>
            <Route path="/problem/:problemId/detail">
              <Detail />
            </Route>
            <Route path="/problem/:problemId/coding">
              <Coding />
            </Route>
            <Route exact path="/score/:imageURL/:imageScore">
              <Score />
            </Route>
          </Switch>
        </Auth>
      </BrowserRouter>
    </>
  )
}

export default App

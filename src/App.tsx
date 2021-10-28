import "./App.css";
import Login from "./components/Login";

// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Coding from "./coding";

function App() {
  return (
    // <Router>
    // <Route exact path="/">
    //<Login />
    // </Route>
    // </Router>
    <BrowserRouter>
      <Switch>
        <Route path="/coding">
          <Coding />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

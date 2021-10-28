import "./App.css";
import * as React from "react";
import Login from "./pages/Login";
import Competitions from "./pages/competitions";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/competitions">
        <Competitions />
      </Route>
    </Router>
  );
}

export default App;

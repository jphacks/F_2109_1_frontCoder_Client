import "./App.css";
import Login from "./components/Login";
import Detail from "./pages/Detail";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/problem">
        問題一覧
      </Route>
      <Route path="/problem/:broadcastId" children={<Detail />} />
    </Router>
  );
}

export default App;

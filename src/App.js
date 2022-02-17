import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" excat />
        </Switch>
      </Router>
    </>
  );
}

export default App;

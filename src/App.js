import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" excat component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

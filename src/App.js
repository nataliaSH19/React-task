import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page.jsx";
import LoginPage from "./pages/login-page/login-page.jsx";
import RegisterPage from "./pages/register-page/register-page.jsx";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />

          <Route path="/register" component={RegisterPage} />

          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

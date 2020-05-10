import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/common/header_basic";
import Home from "./pages/EveryShareHome";
import Board from "./pages/EveryShareList";
import View from "./pages/EveryShareView";
import Write from "./pages/EveryShareWrite";

import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import NotFound from "./NotFound"


class App extends Component  {
  render() {
    
    return  (
      <Router>
        <div id="wrap">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/board/:category" component={Board} />
              <Route path="/view/:postNum" component={View} />
              <Route path="/write" component={Write} />
	      <Route path="/register" component={Register} />
	      <Route path="/login" component={Login} />
	      <Route path="/profile" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>

    );
  }
}

export default App;

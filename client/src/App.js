import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/common/header";
import Home from "./pages/EveryShareHome";
import Footer from "./component/common/footer";
import Board from "./pages/EveryShareList";
import View from "./pages/EveryShareView";
import Write from "./pages/EveryShareWrite";
import Register from "./pages/EveryShareRegister";
import Login from "./container/user/login";
import Profile from "./container/user/profile";
import NotFound from "./NotFound"

class App extends Component  {
  
  state = {
    parentText : true,
  }
 
  changeLang1 = () => {
    this.setState({ parentText: false });
  };
  
  render() {
    
    return  (
      <Router>
        <div id="wrap">
        <Header/>     
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/board/:category" component={Board} />
                <Route path="/view/:postNum" component={View} />
                <Route path="/write" component={Write} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile} />
                <Route component={NotFound} />
              </Switch>
          <Footer/>
        </div>
      </Router>

    );
  }
}

export default App;

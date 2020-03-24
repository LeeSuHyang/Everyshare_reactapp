import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EveryShareHome from "./container/main/EveryShareHome";
import EveryShareWrite from "./container/write/EveryShareWrite";

class App extends Component {

  render() {
    return (

      <Router>
           <Route exact path="/" component={EveryShareHome} /> 
           <Route path="/write" component={EveryShareWrite} />
        </Router>
    );
  } 
}
 
export default App;
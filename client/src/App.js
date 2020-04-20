import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EveryShareHome from "./container/main/EveryShareHome";
import EveryShareWrite from "./container/board/EveryShareWrite";
import EveryShareBoardList from './container/board/EveryShareList';

class App extends Component {

  render() {
    return (
      <Router>
           <Route exact path="/" component={EveryShareHome} /> 
           <Route path="/board/write" component={EveryShareWrite} />
           <Route path="/board/" component={EveryShareBoardList} />
      </Router>
    );
  } 
  
}

export default App;
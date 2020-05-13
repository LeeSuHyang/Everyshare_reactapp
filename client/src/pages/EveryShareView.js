import React, { Component } from 'react';
import BoardView from "../container/view/boardView";
import "../lib/css/EveryShare_view.css";

class EveryShareView extends Component {
  
  componentDidMount() {
    const postNum = this.props.location.pathname
    console.log(postNum)
  }

  render() {
    return (   
      <section id="main_contents">
        <div id="contents_wrap">
          <BoardView></BoardView>
        </div>
      </section>
      
    );
  } 
}

export default EveryShareView;
 
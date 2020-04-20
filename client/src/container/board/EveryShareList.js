import React, { Component } from 'react';
import HeaderBasic from "../../component/header_basic";
import BoardList from "../board/boardList"

class EveryShareList extends Component {
  render() {
    return (   
        <div id="wrap">
          <HeaderBasic></HeaderBasic>
          <BoardList></BoardList>
        </div>    
    );
  } 
}
 
export default EveryShareList;
 
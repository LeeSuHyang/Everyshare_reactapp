import React, { Component } from 'react';
import HeaderSpecial from "../../component/header_special";
import WriteForm from "./WriteForm";


class EveryShareWrite extends Component {

  handleCreate = (data) => {
   
  }

  render() {
    return (
        <div id="wrap"> 
            <HeaderSpecial />   
            <WriteForm onCreate={this.handleCreate}/>

        </div>  
    );
  } 
}
 
export default EveryShareWrite;
 
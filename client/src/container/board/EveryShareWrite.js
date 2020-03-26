import React, { Component } from 'react';
import '../../css/EveryShare_write.css'
import HeaderSpecial from "../../component/header_special";
import WriteForm from "./WriteForm";
import axios from 'axios';

class EveryShareWrite extends Component {

  handleCreate = (write) => {
    axios.post(`http://localhost:3001/board/write`, { write })
    .then(res => {
      console.log(res);
    })
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
 
import React, { Component } from 'react';
import '../lib/css/EveryShare_write.css'
import WriteForm from "../container/write/WriteForm";
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
          <WriteForm onCreate={this.handleCreate}/>
    );
  }
}
 
export default EveryShareWrite;
 
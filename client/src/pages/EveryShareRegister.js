import React, { Component } from "react";
import "../lib/css/EveryShare_boardlist.css";
import Register from "../container/user/register";

class EveryShareRegister extends Component {
  render() {
    return (
      <section id="main_contents">
        <div id="contents_wrap">
          <Register></Register>
        </div>
      </section>
    );
  }
}

export default EveryShareRegister;

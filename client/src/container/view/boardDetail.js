import React, { Component } from "react";

class BoardDetail extends Component {
  componentDidMount() {

    const { postNum } = this.props.location.state.postNum;

    console.log(postNum)


  }

  render() {
    return <div></div>;
  }
}

export default BoardDetail;

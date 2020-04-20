import React, { Component } from "react";
import moment from 'moment'

class BoardItem extends Component {

  componentDidMount() {
    this.selectType();
  }
  selectType(postType) {
    if(postType === "lender") {
      return (<td style={{background: '#97616C'}}></td>)
    } else {
      return (<td style={{background: '#334663'}}></td>)
    }
  }

  render() {

    return (

    <tr>
        {/* 종류에 따른 색 표시 */}
          {this.selectType(this.props.row.postType)}
        {/* 프로필사진 */}
        <td>
          <div></div>
        </td>
        {/* 닉네임 */}
        <td>
          {this.props.row.postWriter}
        </td>
        {/* 제목 */}
        <td>{this.props.row.postTitle}</td>
        {/* 날짜 */}
        <td>{moment(this.props.row.postDate).format('YYYY/MM/DD')}</td>
        {/* 거래 상태*/}
        <td>{this.props.row.state}</td>
    </tr>
    );
  }
}


export default BoardItem;

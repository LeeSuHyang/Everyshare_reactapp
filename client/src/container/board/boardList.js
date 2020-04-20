import React, { Component } from "react";
import axios from 'axios';
import BoardItem from "./boardItem"
import "../../css/EveryShare_boardlist.css";

class BoardList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: "디지털/가전",
      allBoardList: [],
      currentBoardList: [],
    };
    this.preBoardContentsPerList = 0;
    this.boardContentsPerList = 10;
  }

  //컴포넌트 생성 후, 데이터 가져오기
  componentDidMount() {
      this._getList();
  }

  _getList(){ 
    axios.get('http://localhost:3001/board/') 
        .then(allBoardList => {
            console.log(allBoardList.data)
            const allList = allBoardList.data;

            this.setState({ 
              allBoardList,
              currentBoardList: allList.slice(0, this.boardContentsPerList)
            }); 

            console.log(this.state.currentBoardList)
        })
        .catch(error => { console.log(error); }); 
    }

    //데이터 추가로 가져오기 위한 함수
    fetchMoreData = () => {
      setTimeout(() => {
        this.setState({
          //이전의 보드 갯수 값을 이전보드 값 변수에 저장한다
          preBoardContentsPerList : this.state.boardContentsPerList,
          //보드 갯수에 갯수를 더하여 준다
          boardContentsPerList: this.setState.boardContentsPerList+5,
          //concat으로 현재 배열에 추가 해 주면 될듯
        });
      }, 1500);
    };

  render() {
    const currentBoardList = this.state.currentBoardList;

    return (
      <section id="main_contents">
        <div id="contents_wrap">
          <div className="title_wrap">
            <h3>디지털/가전</h3>
            <select name="trade_state" id="board_trade_state">
              <option>전체 거래 보기</option>
              <option>거래중</option>
              <option>거래대기</option>
              <option>거래완료</option>
            </select>
          </div>

          <table className="board_list_table">
            <thead>
              <tr>
                <th></th>
                <th colSpan="2">거래자 정보</th>
                <th>제목</th>
                <th>등록날짜</th>
                <th>거래상태</th>
              </tr>
            </thead>

            <tbody>
              {/* 반복구간 */}
              {
                currentBoardList.map((row,index) =>
                    (<BoardItem key={index} row={row}></BoardItem>)
                  )
              }
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default BoardList;

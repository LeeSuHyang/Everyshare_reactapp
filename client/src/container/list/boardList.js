import React, { Component } from "react";
import axios from "axios";
import BoardItem from "./boardItem";
import InfiniteScroll from "react-infinite-scroller";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class BoardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "디지털/가전",
      allBoardData: [],
      currentBoardData: [],
      preBoardPerPage: 10,
      boardPerPage: 10,
    };
  }

  //컴포넌트 생성 후, 데이터 가져오기
  componentDidMount = async () => {
    const boardData = await axios.get("http://localhost:3001/board/");
    const allBoardDatas = boardData.data;

    this.setState({
      allBoardData: allBoardDatas
    });
  };

  //데이터 추가로 가져오기 위한 함수
  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        preBoardPerPage: this.state.boardPerPage,
        boardPerPage: this.state.boardPerPage + 10,
        currentBoardData: this.state.currentBoardData.concat(this.state.allBoardData.slice(
          this.state.preBoardPerPage,
          this.state.boardPerPage
        ))
      });
    }, 1500);
  };

  render() {
    const currentBoardList = this.state.currentBoardData;

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
          <div className="boardList_wrap">
            <div className="boardList_header">
              <div>거래유형</div>
              <div>거래자 정보</div>
              <div>제목</div>
              <div>등록날짜</div>
              <div>거래상태</div>
            </div>
            <InfiniteScroll
              pageStart={0}
              loadMore={this.fetchMoreData}
              hasMore={true || false}
              loader={<div className="loader loaderBox"><Loader
              type="TailSpin"
              color="#979797"
              height={40}
              width={40}
              timeout={3000} /></div>}
            >
              {currentBoardList.map((row, index) => (
                <BoardItem key={index} row={row}></BoardItem>
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </section>
    );
  }
}

export default BoardList;

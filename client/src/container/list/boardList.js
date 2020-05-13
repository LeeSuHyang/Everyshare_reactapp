import React, { Component } from "react";
import axios from "axios";
import BoardItem from "./boardItem";
import InfiniteScroll from "react-infinite-scroller";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";

class BoardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.location.state.category,
      allBoardData: [],
      currentBoardData: [],
      preBoardPerPage: 0,
      boardPerPage: 0,
      maxPage: true,
    };
  }

  _getList() {
    const category = this.props.location.state.category;
    //const params = new URLSearchParams(search);
    //const category = params.get("category");
    console.log(category);

    axios.get("http://localhost:3001/board", {
        params: {
          category: category,
        },
      })
      .then((data) => {
        const allBoardDatas = data.data;

        console.log(allBoardDatas);
        this.setState({
          allBoardData: allBoardDatas,
          preBoardPerPage : this.state.allBoardData.length,
          maxPage : true,
        });
      });
  }

  componentDidMount = () => {
    this._getList();
  };

  componentDidUpdate(prevProps) {
    const currentSearch = this.props.location;
    const previousSearch = prevProps.location;

    if (currentSearch !== previousSearch) {
      this.setState({
        category: this.props.location.state.category,
        allBoardData: [],
        currentBoardData: [],
        preBoardPerPage: 0,
        boardPerPage: 0,
      });
      
      this._getList();

    }
  }

  //데이터 추가로 가져오기 위한 함수
  fetchMoreData = () => {
    setTimeout(() => {

      if(this.state.currentBoardData.length >= this.state.allBoardData.length) {
        console.log("더 이상 데이터 없음")
        this.setState({
          maxPage : false,
        })
      }

      this.setState({
        preBoardPerPage: this.state.boardPerPage,
        boardPerPage: this.state.boardPerPage + 5,
        currentBoardData: this.state.currentBoardData.concat(
          this.state.allBoardData.slice(
            this.state.preBoardPerPage,
            this.state.boardPerPage
          )
        ),
      });
    }, 1500);
  };

  render() {
    let currentBoardList = this.state.currentBoardData;

    return (

      <div id="contents_wrap">
      <div className="title_wrap">
        <h3>{this.state.category}</h3>
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
          hasMore={this.state.maxPage}
          loader={
            <div className="loader loaderBox" key={0}>
              <Loader
                type="TailSpin"
                color="#979797"
                height={40}
                width={40}
                timeout={3000}
              />
            </div>
          }
        >
          {currentBoardList.map((row, index) => (
            <BoardItem row={row} key={index}></BoardItem>
          ))}
        </InfiniteScroll>
      </div>
    </div>
    );
  }
}

export default withRouter(BoardList);

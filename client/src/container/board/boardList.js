import React, { Component } from 'react';
import '../../css/EveryShare_boardlist.css'

class BoardList extends Component {
  render() {
    return (
        <section id="main_contents">
            <div id="contents_wrap">

                <div class="title_wrap">
                    <h3>디지털/가전</h3>
                    <select name="trade_state" id="board_trade_state">
                        <option>전체 거래 보기</option>
                        <option>거래중</option>
                        <option>거래대기</option>
                        <option>거래완료</option>
                    </select>
                </div>
                
                <table class="board_list_table">
                    <thead>
                        <tr>
                            <th colspan="2">거래자 정보</th>
                            <th>제목</th>
                            <th>등록날짜</th>
                            <th>거래상태</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div></div>
                            </td>
                            <td>어피치러버<br /><span class="text_weight">@apeach11</span></td>
                            <td>카메라 대여해드립니다! 카메라 좋아요</td>
                            <td>2020/12/31</td>
                            <td>거래대기</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
  } 
}
 
export default BoardList;
 
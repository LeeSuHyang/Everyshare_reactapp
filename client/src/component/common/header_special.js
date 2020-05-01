import React, { Component } from 'react';
import '../css/common.css'
import '../css/EveryShare_specialHeader.css'
import logo_Image from "../img/common/everyshareLogo.png";
import btnMenuImage from "../img/common/special_menu.png";

//회원가입, 마이페이지, 로그인, 글쓰기 등에 사용
class HeaderSpecial extends Component {
 
    render() {
        return(
              <div id="header_wrap">
                <header>
                    <h1><a href="/" onClick={function(e) {
                        //이벤트의 기본 설정을 막는다
                        e.preventDefault();
                        //눌렀을 때 발생하는 함수 불러오도록 설정함
                        this.props.onChangePage();
                    }.bind(this)}><img src={logo_Image} alt="에브리쉐어"></img></a></h1>
                    <div className="btn_nav"><a href=" /"><img src={btnMenuImage} alt="홈으로,로그아웃,내정보보기 메뉴"></img></a></div>
                    <nav id="lnb">
                        <ul>
                            <li><a href=" /">홈으로</a></li>
                            <li><a href=" /">로그아웃</a></li>
                            <li><a href=" /">내정보보기</a></li>
                        </ul>
                    </nav>  
                </header>
              </div>
        );
    }
}

//이 구문이 있어야 외부에서 사용 가능하게 함
export default HeaderSpecial;
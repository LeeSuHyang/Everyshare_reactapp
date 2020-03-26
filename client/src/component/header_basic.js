import React, { Component } from 'react';
import '../css/common.css'
import '../css/EveryShare_basicHeader.css'
import logo_Image from "../img/common/everyshareLogo.png";


class HeaderBasic extends Component {
 
    render() {
        return(

        <div className="header_wrap">
            <header>
                <div className="global_nav_wrap">
                    <nav className="global_nav">
                        <ul>
                            <li><a href=" /">마이페이지</a></li>
                            <li><a href=" /">로그인</a></li>
                            <li><a href=" /">회원가입</a></li>
                        </ul>
                    </nav>
                </div>
                
                <div className="clear"></div>
          
                <div className="header_logo_wrap">
                    <div className="logo_wrap">
                    <h1><a href=" #"><img src={logo_Image} alt="에브리쉐어" /></a></h1>
                        <form name="header_search_box" action="#" method="get" target="_blank">
                            <input type="search" />
                        </form>
                    </div>
                </div>
       

                <nav className="main_nav_wrap">
                    <ul className="main_nav">
                        <li><a href=" /">글쓰기</a></li>
                        <li><a href=" /">디지털/가전</a></li>
                        <li><a href=" /">유아동</a></li>
                        <li><a href=" /">생활용품</a></li>
                        <li><a href=" /">의류/잡화</a></li>
                        <li><a href=" /">스포츠/레저</a></li>
                        <li><a href=" /">도서/취미</a></li>
                        <li><a href=" /">기타용품</a></li>
                    </ul>
                </nav>
        
            </header>
        </div>

        );
    }
}

//이 구문이 있어야 외부에서 사용 가능하게 함
export default HeaderBasic;
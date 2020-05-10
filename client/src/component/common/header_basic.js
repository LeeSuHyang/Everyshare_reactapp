import React, { Component } from 'react';
import '../../lib/css/common.css'
import '../../lib/css/EveryShare_basicHeader.css'
import logo_Image from "../../lib/img/common/everyshareLogo.png";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class HeaderBasic extends Component {
 
    render() {
        return(

        <div className="header_wrap">
            <header>
                <div className="global_nav_wrap">
                    <nav className="global_nav">
                        <ul>
                            <li><Link to={{pathname:'/profile'}}>마이페이지</Link></li>
                            <li><Link to={{pathname:'/login'}}>로그인</Link></li>
                            <li><Link to={{pathname:'/register'}}>회원가입</Link></li>
                        </ul>
                    </nav>
                </div>
                
                <div className="clear"></div>
          
                <div className="header_logo_wrap">
                    <div className="logo_wrap">
                    <h1><Link to={'/'}><img src={logo_Image} alt="에브리쉐어" /></Link></h1>
                        <form name="header_search_box" action="#" method="get" target="_blank">
                            <input type="search" />
                        </form>
                    </div>
                </div>
       
                <nav className="main_nav_wrap">
                    <ul className="main_nav">
                        <li><Link to="/write" >글쓰기</Link></li>
                        <li><Link to={{pathname:'/board/digital?category=1', state: {category: "디지털/가전"} }}>디지털/가전</Link></li>
                        <li><Link to={{pathname:'/board/kids?category=2', state: {category: "유아동"} }}>유아동</Link></li>
                        <li><Link to={{pathname:'/board/daily?category=3', state: {category: "생활용품"} }}>생활용품</Link></li>
                        <li><Link to={{pathname:'/board/clothes?category=4', state: {category: "의류/잡화"} }}>의류/잡화</Link></li>
                        <li><Link to={{pathname:'/board/sport?category=5', state: {category: "스포츠/레저"} }}>스포츠/레저</Link></li>
                        <li><Link to={{pathname:'/board/book?category=6', state: {category: "도서/취미"} }}>도서/취미</Link></li>
                        <li><Link to={{pathname:'/board/etc?category=7', state: {category: "기타용품"} }}>기타용품</Link></li>
                    </ul>
                </nav>
        
            </header>
        </div>

        );
    }
}

export default withRouter(HeaderBasic);

import React, { Component } from 'react';
import axios from 'axios';

import '../../css/EveryShare_write.css'


 class WriteForm extends Component {
     
    constructor(props) {
		super(props);
		this.state = {
            userChecked: 'lender',          //물품등록유형선택
            currentLocation: '',            //지역은 어디신가요
            writeCategory: '디지털/가전',    //카테고리 선택
            rentalType: 'long',
            boardTitle: '',
            boardContents: '',
            minTerm: '',
            maxTerm: '',
            perPrice:'일(Days)',
            tempPerPrice:'',
            dayPerPrice: '',
            weekPerPrice: '',
            monthPerPrice: '',
            guarantee: '',
        };
    }
    
    //state 셋팅
    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChangeVale = (e) => {

        this.setState({
            tempPerPrice: e.target.value},  ()=> { 
                
        //기본적으로 발생하는 리로딩 이벤트 방지
         if(this.state.perPrice === '달(Months)') {

            this.setState({
                monthPerPrice : this.state.tempPerPrice},  ()=> { 
            });
        } else if(this.state.perPrice === '주(Weeks)') {
            this.setState({
                weekPerPrice : this.state.tempPerPrice},  ()=> { 
            });
        } else {
            this.setState({
                dayPerPrice : this.state.tempPerPrice},  ()=> { 
            });
        }
        });

    } 

    //부모에게 데이터 전달
    handleSubmit = (e) => {

       
        e.preventDefault();

        const write = {
            postNum: 'lend-2',
            postType: '1',
            writer: 'user-1',
            currentLocation: this.state.currentLocation,
            boardTitle: this.state.boardTitle,

            writeCategory : this.state.writeCategory,
            boardContents: this.state.boardContents,
            dayPerPrice: this.state.dayPerPrice,
            weekPerPrice: this.state.weekPerPrice,
            monthPerPrice: this.state.monthPerPrice,

            minTerm: this.state.minTerm,
            maxTerm: this.state.maxTerm,
            rentalPeriodType: this.state.rentalType,
            guarantee: this.state.guarantee,
            state: '1',
          };


            axios.post(`http://localhost:3001/write`, { write })
            .then(res => {
              console.log(res);
              console.log(res.data);
            })

        this.props.onCreate(this.state);
    
         // 상태 초기화
         this.setState = ({
            userChecked: 'lender',          //물품등록유형선택
            currentLocation: '',            //지역은 어디신가요
            writeCategory: '디지털/가전',    //카테고리 선택
            rentalType: 'long',
            boardTitle: '',
            boardContents: '',
            minTerm: '',
            maxTerm: '',
            perPrice:'일(Days)',
            tempPerPrice:'',
            dayPerPrice: '',
            weekPerPrice: '',
            monthPerPrice: '',
            guarantee: '',
        });

        
    }

    render() {

        const textStyle= {
            display: 'inline-block',
            fontSize: '22px',
            fontWeight: 100,
            marginRight: '8px'
        }

        return (
            <section id="contents_wrap">
                <h2><img src="# " alt="" /> 물품등록</h2>
                <form onSubmit={this.handleSubmit}>
                    <article  className="product_enroll">
                        <h3>1단계</h3>

                        <div  className="proudct_box">
                            <label htmlFor="userChecked">물품등록 유형을<br />선택하세요 *</label>
                            <div  className="rent_add">

                                <input type="radio" name="userChecked" id="lend" value="lender"
                                onChange={this.handleChange} checked={this.state.userChecked ==='lender'} />

                                <label htmlFor="lend"> <b>물건 빌려드려요</b> <br />
                                    <span className="usergroup_txt"> 회원님의 집에 방치되어 있는 물건을 <br />
                                        필요한 누군가에게 빌리는 유형입니다
                                    </span>
                                </label>

                                <input type="radio" name="userChecked" id="barrow" value="barrower"
                                onChange={this.handleChange} checked={this.state.userChecked === 'barrower'} />
                               
                                <label htmlFor="barrow"> <b>물건 빌려주세요</b> <br />
                                    <span className="usergroup_txt"> 필요하지만 구매는 고민이 되는 물건을 <br />
                                        누군가에게 빌리는 유형입니다
                                    </span>
                                </label>

                            </div>
                        </div>

                        <div  className="clear"></div>

                        <div  className="proudct_box">
                            <label htmlFor="current_location"> 지역은 <br />어디신가요? *</label>
                            <div  className="gps_search">
                                <input type="search" name="currentLocation" id="current_location" value={this.state.currentLocation} onChange={this.handleChange} />
                                <button name="btnGps"  className="btn_gps"></button>
                            </div>
                        </div>

                        <div  className="proudct_box">
                            <label> 카테고리를 <br />선택해주세요 *</label>
                            <select id="select_category" name="writeCategory" value={this.state.writeCategory} onChange={this.handleChange}>
                                <option>디지털/가전</option>
                                <option>유아동</option>
                                <option>생활용품</option>
                                <option>의류/잡화</option>
                                <option>스포츠/레저</option>
                                <option>도서/취미</option>
                                <option>기타용품</option>
                            </select>
                        </div>
                    </article>
    
                    <div  className="clear"></div>

                    <article  className="product_enroll">
                        <h3>2단계</h3>

                        <div  className="proudct_box">
                            <label htmlFor="rent_type"> 물건의 대여 유형을 <br />선택 해 주세요 *</label>

                            <div  className="retal_term">
                                <input type="radio" name="rentalType" id="rent_type_1" value="long" 
                                onChange={this.handleChange} checked={this.state.rentalType  === 'long'} />
                                <label htmlFor="rent_type_1"> <b>장기대여</b> <br />
                                    <span>(최소 1달 이상)</span>
                                </label>
                                <input type="radio" name="rentalType" id="rent_type_2" value="short" 
                                 onChange={this.handleChange} checked={this.state.rentalType === 'short'}/>
                                <label htmlFor="rent_type_2"> <b>단기대여</b> <br />
                                    <span>(최장 1달 이하)</span>
                                </label>
                                <input type="radio" name="rentalType" id="rent_type_3" value="none"
                                 onChange={this.handleChange} checked={this.state.rentalType === 'none'} />
                                <label htmlFor="rent_type_3">  <b>구분없음</b>  <br />
                                    <span>(기간 구분 없음)</span>
                                </label>
                            </div>
                        </div>

                        <div  className="clear"></div>

                        <div  className="proudct_box">

                            <label htmlFor="rent_contents"> 물품 이미지와 <br /> 내용을 <br />등록 해 주세요 *</label>
                            <input type="text" id="board_title" name="boardTitle" value={this.state.boardTitle} onChange={this.handleChange} />
                            <textarea name="boardContents" id="rent_contents" value={this.state.boardContents} onChange={this.handleChange.bind(this)} cols="116" rows="3"></textarea>
                            <div className="write_contents">
                                <label htmlFor="add_file">사진등록</label>
                                <input type="file" id="add_file" accept="# " required multiple />
                            </div>
                        </div>
                
                        <div  className="proudct_box">
                            <label htmlFor="minmax_term"> 최소/최대 대여 기간을 <br /> 입력 해 주세요 *  <br />  <br />
                            <span  className="title_span"> (최소 대여기간 1일,  <br /> 최대 대여기간 365일)</span></label>
                            
                            <input type="text" name="minTerm" id="minmax_term"  className="minMax_term_input" placeholder="최소기간 입력(1일부터)"
                            value={this.state.minTerm} onChange={this.handleChange} />
                            <span>/</span>
                            <input type="text" name="maxTerm" id="minmax_term"  className="minMax_term_input" placeholder="최대기간 입력(365일까지)" 
                            value={this.state.maxTerm} onChange={this.handleChange}/>
                        </div>
                    
                        <div  className="proudct_box">
                            <label htmlFor="retalfee_cal"> 대여비의 계산 방법을 <br /> 입력 해 주세요 *  <br />  <br />
                                <span  className="title_span"> (반드시 1가지 방법 이상) <br /></span>
                                <button  className="btn_cacul"></button>
                            </label>

                            <div  className="input_price">

                                <select id="retalfee_cal" name="perPrice" value={this.state.perPrice} onChange={this.handleChange}>
                                    <option>일(Days)</option>
                                    <option>주(Weeks)</option>
                                    <option>달(Months)</option>
                                </select>

                                <p style={textStyle}>당, </p>

                                <input type="text" name="tempPerPrice" id="retalfee_cal_txt" value={this.state.tempPerPrice} onChange={this.handleChangeVale}/>
                                <p style={textStyle}>원</p>
                                <label htmlFor="retalfee_cal_txt"></label>

                                <button  className="suggest_add">제안추가</button>
                            </div>
                        </div>

                        <div  className="proudct_box">
                            <label htmlFor="deposit_cal">보증금을입력 <br />해 주세요 *</label>

                            <input type="text" style={{width: '383.17px'}} id="deposit_cal" name="guarantee" value={this.state.guarantee} onChange={this.handleChange} />

                            <p style={textStyle}>원</p>

                            <button  className="shoping_price" style={{marginLeft: '50px'}}>네이버 쇼핑 시세</button>
                            <button  className="shoping_price">다나와 시세</button>
                        </div>

                    </article>
                    <button type="submit" name="btnWriteResult" id="btn_write_result" onClick={this.handleSubmit}>물품 등록하기</button>

                </form>
            </section>
        );
    }
}

export default WriteForm;
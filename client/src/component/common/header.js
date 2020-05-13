import React, { Component } from 'react';
import HeaderB from "./header_basic";
import HeaderS from "./header_special";
import { withRouter } from 'react-router-dom';




class AuthHeader extends Component {

    HeaderType() {

        const exclusionArray = [
            '/write',
            '/login',
            '/profile',
        ]

        for(let i = 0; i < exclusionArray.length; ++i) {
            if(exclusionArray[i] === this.props.location.pathname) {
                return <HeaderS />
            }
        }

        if('/register'=== this.props.location.pathname) {
            return <div></div>
        }
        else {
            return <HeaderB />
        } 
        
    }

    render() {
        return(
            <div>
            
            {this.HeaderType()}
            
            </div>
        );
    }
}

export default withRouter(AuthHeader);

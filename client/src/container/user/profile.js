import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      userID: '',
      nickName: '',
      phoneNum: '',
      walletCode: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      userID: decoded.userID,
      nickName: decoded.nickName,
      phoneNum: decoded.phoneNum,
      walletCode: decoded.walletCode
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>user ID</td>
                <td>{this.state.userID}</td>
              </tr>
              <tr>
                <td>nickName</td>
                <td>{this.state.nickName}</td>
              </tr>
              <tr>
                <td>phoneNum</td>
                <td>{this.state.phoneNum}</td>
              </tr>
	      <tr>
                <td>walletCode</td>
                <td>{this.state.walletCode}</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile
import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
    userID : '',
    password: '',
    phoneNum: '',
    nickName: '',
    walletCode:'', 
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      userID: this.state.userID,
      password: this.state.password,
      phoneNum: this.state.phoneNum,
      nickName: this.state.nickName,
      walletCode: this.state.walletCode
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="userID">Email address</label>
                <input
                  type="userID"
                  className="form-control"
                  name="userID"
                  placeholder="Enter userID"
                  value={this.state.userID}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNum">phoneNum</label>
                <input
                  type="phoneNum"
                  className="form-control"
                  name="phoneNum"
                  placeholder="phoneNum"
                  value={this.state.phoneNum}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nickName">nickName</label>
                <input
                  type="nickName"
                  className="form-control"
                  name="nickName"
                  placeholder="nickName"
                  value={this.state.nickName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="walletCode">walletCode</label>
                <input
                  type="walletCode"
                  className="form-control"
                  name="walletCode"
                  placeholder="walletCode"
                  value={this.state.walletCode}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register

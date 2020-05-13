import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
    userID : newUser.userID,
    password: newUser.password,
    phoneNum: newUser.phoneNum,
    nickName: newUser.nickName,
    walletCode: newUser.walletCode
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      userID: user.userID,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
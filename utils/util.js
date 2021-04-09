import {http} from "../request/index";

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


/**
 * 检查微信会话是否过期
 */
const checkSession = () =>{
  return new Promise(function (resolve, reject) {
    wx.checkSession({
      success: function () {
        resolve(true);
      },
      fail: function () {
        reject(false);
      }
    })
  });
}

/**
 * 调用微信登录
 */
const login = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        if (res.code) {
          resolve(res.code);
        } else {
          reject(res);
        }
      },
      fail: err => {
        reject(err);
      }
    });
  });
}

const getUserInfo = () => {
  return new Promise((resolve, reject) =>{
    wx.getUserInfo({
      withCredentials: true,
      success: res => {
        if (res.errMsg === 'getUserInfo:ok') {
          resolve(res);
        } else {
          reject(res)
        }
      },
      fail: err => {
        reject(err);
      }
    })
  });
}

const checkIsLogin = () =>{
  let openid = wx.getStorageSync('openid')
  if (openid){
    return true
  }
  return false
}

const redirect = (url) => {
    wx.redirectTo({
      url: url
    });
}

const showErrorToast = (msg) => {
  wx.showToast({
    title: msg
  })
}

const bindLogin = () =>{
  login().then(code=>{
    let params = {
      url: 'user/token',
      method: 'POST',
      data: {
        code
      }
    }
    http(params).then(res=>{
      if(res.status === 0){
        wx.setStorageSync('openid',res.openid)
      }
    })
  })
}

module.exports = {
  formatTime,
  showErrorToast,
  getUserInfo,
  login,
  checkSession,
  checkIsLogin,
  redirect,
  bindLogin
}

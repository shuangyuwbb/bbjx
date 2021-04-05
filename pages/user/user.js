import {login} from '../../utils/asyncwx.js'
import {http} from '../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabsOrder: [
      {id: 0, img: '../../images/nopay.svg', name: '待付款'},
      {id: 1, img: '../../images/pedding.svg', name: '待发货'},
      {id: 2, img: '../../images/noreceive.svg', name: '待收货'},
      {id: 3, img: '../../images/noRate.svg', name: '待评价'},
      // {id: 3, img: '../../images/nopay.svg', name: '退款/售后'}
    ],
    tabs: [
      {id: 0, value: '0', name: '优惠卷'},
      {id: 1, value: '0', name: '补贴奖励(元)'},
      {id: 2, value: '0', name: '零钱(元)'},
      {id: 3, value: '0', name: '分期支付'}
    ],
    tabsTool: [
      {id: 0, img: '../../images/like.svg', name: '喜欢'},
      {id: 1, img: '../../images/address.svg', name: '收货地址'},
      {id: 2, img: '../../images/service.svg', name: '宝宝客服'},
      {id: 3, img: '../../images/join.svg', name: '我要加盟'}
    ],
    list: []
  },

  onShow(){
    this.loadGoodsList()
  },

  bindLogin(){
    login().then(res=>{
      console.log(res);
      let params = {
        url: '/api/user/token',
        method: 'POST',
        data: {
          code: res.code,
        }
      }
      http(params).then(res=>{
        console.log(res.token)
        if(res.status === 0){
          wx.setStorageSync('token',res.token)
        }
      })
    })
  },

  loadGoodsList(){
    let params = {
      url: 'cart/shopList'
    }
    http(params).then(res=>{
      console.log(res)
      this.setData({
        list: res.data
      })
    })
  }
  
})
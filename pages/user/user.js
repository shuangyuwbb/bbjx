import {login} from '../../utils/asyncwx.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabsOrder: [
      {id: 0, url: '../../images/nopay.svg', text: '待付款'},
      {id: 1, url: '../../images/pedding.svg', text: '待发货'},
      {id: 2, url: '../../images/noreceive.svg', text: '待收货'},
      {id: 3, url: '../../images/noRate.svg', text: '待评价'},
      // {id: 3, url: '../../images/nopay.svg', text: '退款/售后'}
    ],
    tabs: [
      {id: 0, value: '0', text: '优惠卷'},
      {id: 1, value: '0', text: '补贴奖励(元)'},
      {id: 2, value: '0', text: '零钱(元)'},
      {id: 3, value: '0', text: '分期支付'}
    ],
    tabsTool: [
      {id: 0, url: '../../images/like.svg', text: '喜欢'},
      {id: 1, url: '../../images/address.svg', text: '收货地址'},
      {id: 2, url: '../../images/service.svg', text: '宝宝客服'},
      {id: 3, url: '../../images/join.svg', text: '我要加盟'}
    ]
  },

  bindLogin(){
    login().then(res=>{
      console.log(res);
    })
  }
})
import {http} from './../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  onShow(){
    console.log('rr');
    this.loadGoodsList()
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
  },

  toGoodsDetail(e){
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.detail,
    })
  },
})

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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
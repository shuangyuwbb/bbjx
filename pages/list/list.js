import {http} from './../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    list: []
  },

  onLoad(option){
    this.setData({
      id: option.id
    })
  },

  onShow(){
    this.loadGoodsList()
  },

  loadGoodsList(){
    let params = {
      url: 'goods/list',
      data: {
        id: this.data.id
      }
    }
    http(params).then(res=>{
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

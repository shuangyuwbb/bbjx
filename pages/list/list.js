import {http} from './../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[
      {
        id: 0, 
        url: '../../images/2.png',
        text: 'LG锐眼润膏洗发水 头皮专户人参韧养 250ml/支 百草植物 毫无鼻腔',
        hot: '100%好评',
        label: '人参韧养',
        price: 29.9,
        tip: '立减'
      },
      {
        id: 0, 
        url: '../../images/2.png',
        text: 'LG锐眼润膏洗发水 头皮专户人参韧养 250ml/支 百草植物 毫无鼻腔',
        hot: '100%好评',
        label: '人参韧养',
        price: 29.9,
        tip: '立减'
      },
      {
        id: 0, 
        url: '../../images/2.png',
        text: 'LG锐眼润膏洗发水 头皮专户人参韧养 250ml/支 百草植物 毫无鼻腔',
        hot: '100%好评',
        label: '人参韧养',
        price: 29.9,
        tip: '立减'
      }
    ],
    list: []
  },
  
  onShow(){
    this.loadGoodsList()
  },

  loadGoodsList(){
    let params = {
      url: 'goods/list'
    }
    http(params).then(res=>{
      this.setData({
        list: res.data
      })
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
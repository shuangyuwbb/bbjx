// const { http } = require("../../request/index")

import {http} from './../../request/index'
Page({
  data:{
    tabs: [],
    goods:[],
    hotGoods:[]
  },
  onShow(){
    this.loadCategory()
    this.loadHotGoods()
    this.loadGoodsList()
  },

  loadCategory(){
    let params = {
      url: 'goods/index/category'
    }
    http(params).then(res=>{
      this.setData({
        tabs: res.data
      })
    })
  },

  loadHotGoods(){
    let params = {
      url: 'goods/index/hotGoods'
    }
    http(params).then(res=>{
      console.log(res);
      this.setData({
        hotGoods: res.data
      })
    })
  },

  loadGoodsList(){
    let params = {
      url: 'goods/index/shopList'
    }
    http(params).then(res=>{
      this.setData({
        goods: res.data
      })
    })
  },

  toSearch(){
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },

  toGoodsDetail(e){
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.detail,
    })
  },

  onShareAppMessage: function () {
    return {
      title: 'bbjx',
      desc: '精选商城',
      path: '/pages/index/index'
    }
  },

  toGoodsList(e){
    console.log(e.detail)
    wx.navigateTo({
      url: '/pages/list/list?id='+e.detail
    })
  },
})

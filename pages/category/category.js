// pages/category/category.js
import {http} from './../../request/index'
Page({

  data: {
    leftNav: [],
    type: 'nav',

    rightContent: [],

    currentIndex: 0,
    scrollTop: 0,
    toView: ''
  },

  onShow(){
    this.loadCategoryV1()
  },

  loadCategoryV1(){
    let params = {
      url: 'goods/category/v1'
    }
    http(params).then(res=>{
      this.setData({
        leftNav: res.data,
        currentIndex: res.data[0].id
      })
      this.loadCategoryV2()
    })
  },

  loadCategoryV2(){
    let params = {
      url: 'goods/category/v2',
      data: {
        id: this.data.currentIndex
      }
    }
    http(params).then(res=>{
      console.log(res)
      this.setData({
        rightContent: res.data
      })
    })
    
  },
  handleSelection(e){
    this.setData({
      currentIndex: e.currentTarget.dataset.id
    })
    this.loadCategoryV2()
  },

  loadGoodsList(){
    let params = {
      url: ''
    }
    http(params).then(res=>{
      
    })
  },

  toGoodsDetail(e){
    console.log(e.detail);
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.detail,
    })
    
  }
  
})
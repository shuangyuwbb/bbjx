// const { http } = require("../../request/index")

import {http} from './../../request/index'
Page({
  data:{
    tabs: [
      {id: 0, url: '../../images/1.png', text: '美食生鲜'},
      {id: 1, url: '../../images/1.png', text: '美食生鲜'},
      {id: 2, url: '../../images/1.png', text: '美食生鲜'},
      {id: 3, url: '../../images/1.png', text: '美食生鲜'},
    ],
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
    hotGoods: [
      {id: 0, url: '../../images/2.png', text: '烟台黄金内有富士苹果', price: 19.19, old_price: 29.9},
      {id: 1, url: '../../images/2.png', text: '烟台黄金内有富士苹果', price: 19.19, old_price: 29.9},
      {id: 2, url: '../../images/2.png', text: '烟台黄金内有富士苹果', price: 19.19, old_price: 29.9},
    ]
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

  toGoodsDetail(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },

  onShareAppMessage: function () {
    return {
      title: 'bbjx',
      desc: '精选商城',
      path: '/pages/index/index'
    }
  },
})

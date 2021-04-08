import {http} from './../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: -1,
    swipter:[
      {url: 'https://yanxuan.nosdn.127.net/dc1b671ad54e16339f1b26cfeec6a1ea.jpg'},
      {url: 'https://yanxuan.nosdn.127.net/1de4da49367dd7c01af1f7a2b23b0237.jpg'},
      {url: 'https://yanxuan.nosdn.127.net/14939888170021096.png'},
      {url: 'https://yanxuan.nosdn.127.net/d943675462a06f817d33062d4eb059f5.jpg'}
    ],
    detail:{}
  },
  onLoad(option){
    console.log(option.id);
    this.setData({
      id: option.id
    })
    this.loadGoodsDetail()
  },

  loadGoodsDetail(){
    let params = {
      url: 'goods/detail',
      data:{
        id: this.data.id
      }
    }
    http(params).then(res=>{
      console.log(res)
      this.setData({
        detail: res.data
      })
    })
  },

  toBuy(){
    wx.navigateTo({
      url: '/pages/buy/buy?id='+this.data.id,
    })
  }
})

// pages/category/category.js
import {http} from './../../request/index'
Page({

  data: {
    dataContent: [
      {
        id: 0,
        title: '热门推荐',
        data: [
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          },
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          },
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          }
        ]
      },{
        id: 1,
        title: '智能出行',
        data: [
          {
            id: 0,
            title: '智能出行',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          },
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          },
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          }
        ]
      },{
        id: 2,
        title: '智能穿戴',
        data: [
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          },
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          },
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          }
        ]
      },{
        id: 3,
        title: '超市专区',
        data: [
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          },
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          },
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          }
        ]
      },{
        id: 4,
        title: '智能大家电',
        data: [
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          },
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          },
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          }
        ]
      },{
        id: 5,
        title: '智能小家电',
        data: [
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          },
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          },
          {
            id: 0,
            title: '为你推荐',
            tabs: [
              {id: 0, url: '../../images/2.png', text: '休闲食品'},
              {id: 1, url: '../../images/2.png', text: '休闲食品'},
              {id: 2, url: '../../images/2.png', text: '休闲食品'},
              {id: 3, url: '../../images/2.png', text: '休闲食品'},
              {id: 4, url: '../../images/2.png', text: '休闲食品'},
            ],
          }
        ]
      },
    ],
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
  onLoad(){
    this.setData({rightContent: this.data.dataContent[0]})
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
      // this.setData({
      //   leftNav: res.data
      // })
    })
  },
  handleSelection(e){
    let toView = 'bbjx'
    let id = e.currentTarget.dataset.id
    this.setData({ 
      scrollTop: 0,
      currentIndex: id,
      rightContent: this.data.dataContent[id]
    })
    this.data.dataContent.forEach(item=>{
      if(item.id === id) toView += item.id
    })
    this.setData({ toView })
  },

  loadGoodsList(){
    let params = {
      url: ''
    }
    http(params).then(res=>{
      
    })
  }
  
})
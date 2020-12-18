// pages/category/category.js
Page({

  data: {
    dataContent: [
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
        id: 1,
        title: '超市专区',
        tabs: [
          {id: 0, url: '../../images/2.png', text: '休闲食品'},
          {id: 1, url: '../../images/2.png', text: '休闲食品'},
          {id: 2, url: '../../images/2.png', text: '休闲食品'},
          {id: 3, url: '../../images/2.png', text: '休闲食品'},
          {id: 4, url: '../../images/2.png', text: '休闲食品'},
        ],
      },
      {
        id: 2,
        title: '智能大家电',
        tabs: [
          {id: 0, url: '../../images/2.png', text: '休闲食品'},
          {id: 1, url: '../../images/2.png', text: '休闲食品'},
          {id: 2, url: '../../images/2.png', text: '休闲食品'},
          {id: 3, url: '../../images/2.png', text: '休闲食品'},
          {id: 4, url: '../../images/2.png', text: '休闲食品'},
        ],
      },
      {
        id: 3,
        title: '智能小家电',
        tabs: [
          {id: 0, url: '../../images/2.png', text: '休闲食品'},
          {id: 1, url: '../../images/2.png', text: '休闲食品'},
          {id: 2, url: '../../images/2.png', text: '休闲食品'},
          {id: 3, url: '../../images/2.png', text: '休闲食品'},
          {id: 4, url: '../../images/2.png', text: '休闲食品'},
          {id: 3, url: '../../images/2.png', text: '休闲食品'},
          {id: 4, url: '../../images/2.png', text: '休闲食品'},
        ],
      },
      {
        id: 4,
        title: '智能穿戴',
        tabs: [
          {id: 0, url: '../../images/2.png', text: '休闲食品'},
          {id: 1, url: '../../images/2.png', text: '休闲食品'},
          {id: 2, url: '../../images/2.png', text: '休闲食品'},
          {id: 3, url: '../../images/2.png', text: '休闲食品'},
          {id: 4, url: '../../images/2.png', text: '休闲食品'},
        ],
      }
    ],
    type: 'nav',

    rightContent: [],

    currentIndex: 0,
    scrollTop: 0,
    toView: ''
  },

  handleSelection(e){
    let toView = 'bbjx'
    let id = e.currentTarget.dataset.id
    this.setData({ activeIndex: id })
    this.data.dataContent.forEach(item=>{
      if(item.id === id) toView += item.id
    })
    this.setData({ toView })
  },

  handleScroll(e){
    // console.log(e.detail.scrollTop)
    // if(e.detail.scrollTop > 200){
    //   this.setData({activeIndex: 1 })
    // }
    this.data.dataContent.forEach((item, index)=>{
   
      let boxHeight = Math.ceil(item.tabs.length / 3) * (65 + 8) + 16 + 27
      boxHeight += boxHeight
      if(e.detail.scrollTop >= boxHeight){
        let activeIndex = index
        console.log(index);
        this.setData({activeIndex})
      }
      // console.log(boxHeight)
    })
  }
})
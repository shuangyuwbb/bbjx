import {login} from '../../utils/asyncwx.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {id: 0, url: '../../images/1.png', text: '美食生鲜'},
      {id: 1, url: '../../images/1.png', text: '美食生鲜'},
      {id: 2, url: '../../images/1.png', text: '美食生鲜'},
      {id: 3, url: '../../images/1.png', text: '美食生鲜'},
    ]
  },

  bindLogin(){
    login().then(res=>{
      console.log(res);
    })
  }
})
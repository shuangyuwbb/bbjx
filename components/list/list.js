// components/ChooseGoodsItem/ChooseGoodsItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e){
      console.log(e)
      let id = e.currentTarget.dataset.id
      this.triggerEvent('myEvent', id)
    }
  }
})

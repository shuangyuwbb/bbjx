// components/Cart/Cart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cart:{
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready(){

  },
  /**
   * 组件的方法列表
   */

  methods: {
    sub(e){
      let count = e.currentTarget.dataset
      this.triggerEvent('subCount', count)
    },

    add(e){
      let count = e.currentTarget.dataset
      this.triggerEvent('addCount', count)
    },

    bindchange(e) {
      let { id } = e.currentTarget.dataset
      this.triggerEvent('changeRadio', id)
    }
  }
})

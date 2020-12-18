// components/ItemTab/ItemTab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
    },
    type:{
      type: String,
      default: 'nav' //nav:表示是图标和描述文字可以点击
    }                 // text: 表示都是文字
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

  }
})

// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    latest:{
      type: Boolean,
    },
    first: {
      type: Boolean,
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
    prev(){
      this.triggerEvent("prevPage")
    },
    next() {
      this.triggerEvent("nextPage")
      }
  }
})

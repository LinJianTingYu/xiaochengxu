// components/entertainment/video-page/video-page.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoUrl: {
      type: String
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
    closeVideo () {
      console.log(1)
      this.triggerEvent('closeVideo')
    }
  }
})

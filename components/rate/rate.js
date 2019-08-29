// components/rate/rate.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },
  attached () {
    // console.log(wx.createSelectorQuery().selectAll('#bglyer'))
    // wx.createSelectorQuery().selectAll('#bglyer').style.color = 'red'
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    setWidth(width) {
      return (width * 10) + '%'
    }
  }
})

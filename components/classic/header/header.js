// components/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: {
      type: Object,
    },
    currentIndex: {
      type: String
    }
  },
  attached(){
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()

    this.setData({
      year: year,
      month: this.data.months[month]
    })
  },

  ready(){
   
  },
  /**
   * 组件的初始数据
   */
  data: {
    year: Number,
    month: String,
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月',
      '十二月'
    ],
    isLike: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changLike() {
      let content = this.data.content
      if (content.like_status) {
        content.like_status = 0
        content.fav_nums--
      } else {
        content.like_status = 1
        content.fav_nums++
      }
      this.setData({
        content: content
      })
      wx.request({
        url: 'https://evening-ocean-46832.herokuapp.com/api/classic/like',
        method: "POST",
        data: {
          index: content.index
        }
      })
    }
  }
})

import { HTTP } from '../../utils/http.js'
let http = new HTTP()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    comments:{
      type: Object
    }
  },

  data: {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(){
      this.triggerEvent("onCancel")
    },
    onPost(event){
      const content = event.detail.value || event.currentTarget.dataset.content
      if (content.length > 12) {
        wx.showToast({
          title: '短评最多12个字',
          icon: 'none'
        })
        return
      }
      let contents = this.data.comments
      // 添加短评
      http.request({
        url: 'book/add/short_comment',
        method: "POST",
        data: {
          book_id: this.data.comments.book_id,
          content: content
        },
        success: res => {
          // 判断评论里是否有相同内容
          let islook = false
          contents.comments.forEach((item) => {
            if (item.content == content) {
              item.nums++
              islook = true
            }
          })
          if (!islook) {
            contents.comments.push({
              content: content,
              nums: 1
            })
          }
          this.triggerEvent("resetcomments")
          this.setData({
            comments: contents
          })
        }
      })
      this.triggerEvent("onCancel")
    }
  }
})

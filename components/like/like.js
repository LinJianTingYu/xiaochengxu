// components/like/like.js
import { HTTP } from '../../utils/http.js'
let http = new HTTP()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: {
      type: Object,
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
    favoriteItem() {
      this.triggerEvent("changLike")
      let content = this.data.content
      // if (content.like_status) {
      //   content.like_status = 0
      //   this.isLike("like/cancel", content)
      //   content.fav_nums--
      // } else {
      //   content.like_status = 1
      //   this.isLike("like", content)
      //   content.fav_nums++
      // }
      // this.setData({
      //   content: content
      // })
    },
    //收藏api
    isLike(url, currentData) {
      const type = currentData.type || 400
      http.request({
        url: url,
        method: 'POST',
        data: {
          art_id: currentData.id,
          type: type
        }
      })
    },
  }
})

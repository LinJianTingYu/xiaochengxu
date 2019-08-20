// components/bookList/bookList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book_hotList: {
      type: Array
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
    showBookDetail(e){
      wx.navigateTo({
        url: '/pages/detail/detail?mid=' + e.currentTarget.dataset.book.id
      })
    }
  }
})

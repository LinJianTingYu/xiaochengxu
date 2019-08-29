// pages/book-search/book-search.js
import { HTTP } from '../../utils/http.js'
let http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    queryBookName: '',
    books: null
  },
  // 清空
  clearSearch () {
    console.log(1)
    this.setData({
      queryBookName: ''
    })
  },
  // 关闭搜索
  closeSearch () {
    wx.navigateBack()
  },
  // 搜索书籍
  searchBook(event) {
    const name = event.detail.value
    if (!name) return
    http.request({
      url: '/book/serchBook',
      data: {
        start: 0,
        query: name
      },
      success: data => {
        const books = data.books.map(item => {
          return {
            bookId: item.id,
            title: item.title,
            image: item.image,
            author: item.author,
            pubdate: item.pubdate
          }
        })
        this.setData({
          books
        })
      }
    })
    this.$http.get('/api/book/serchBook', {
      params: {
        start: 0,
        query: this.queryBookName
      }
    }).then(data => {
      this.books = data.books.map(item => {
        item = {
          bookId: item.id,
          title: item.title,
          image: item.image,
          author: item.author,
          pubdate: item.pubdate
        }
        return item
      })
    })
    
  },
  // 展示书记详细页面
  showBookDetail (event) {
    console.log(event)
    const title = event.currentTarget.dataset.title
    const bookid = event.currentTarget.dataset.bookid
    wx.navigateTo({
      url: `../book-detail/book-detail?id=${bookid}`,
    })
  },
  // 做双向绑定
  inputChange (event) {
    this.setData({
      queryBookName: event.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/book/book.js
import { HTTP } from '../../utils/http.js'
let http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSHowSearch: false,
    books: [],
    start: 0,
    tipsText: "正在加载中...",
    loadingMore: false
  },
  // 获取书
  getBooks() {
    if (this.data.start > 12) {
      this.setDate({
        tipsText: '我也是有底线的'
      })
      return
    }
    http.request({
      url: '/book/getBooks',
      data: {
        start: this.data.start
      },
      success: data => {
        const books = data.data.map(item => {
          item.title.replace(/\s+/g, "")
          item.summary.replace(/\s+/g, "").split('/')[0]
          item.comment.replace(/\s+/g, "")
          return item
        })
        this.setData({
          loadingMore: false,
          books: this.data.books.concat(books)
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBooks()
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
  http(query){
    
  },
  handleSearch(){
    wx.navigateTo({
      url: '../book-search/book-search',
    })
    // this.setData({
    //   isSHowSearch: true
    // })
  },
  closeSearch(){
    this.setData({
      isSHowSearch: false
    })
  },
  // 获取更多书籍
  getMoreBook() {
    this.setData({
      start: this.data.start + 1,
      tipsText: "",
      loadingMore: true
    })
    this.getBooks()
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
    console.log(1)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
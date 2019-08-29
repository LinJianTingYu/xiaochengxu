// pages/book/book-detail/book-detail.js
import { HTTP } from '../../utils/http.js'
let http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: null
  },
  // 获取电影详细信息
  getBookDetail(bookId) {
    http.request({
      url: '/book/getBookDetail',
      data: {
        bookId
      },
      success: data => {
        console.log(data)
        let author = ''
        let tags = ''
        data.author.forEach(item => {
          author += ' / ' + item
        })
        data.author = author.slice(2)
        data.tags.forEach(item => {
          tags += ' / ' + item.name
        })
        data.tags = tags.slice(2).split(' / ').slice(2).join(' ')
        this.setData({
          book: data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 
    this.getBookDetail(options.id)
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
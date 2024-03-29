// pages/joke/joke.js
import { HTTP } from '../../../utils/http.js'
let http = new HTTP()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    jokes: [],
    loadingMore: false
  },

  getJokes() {
    http.request({
      url: '/juhe/joke',
      data: {
        page: '1'
      },
      success: data => {
        wx.hideLoading()
        this.setData({
          jokes: this.data.jokes.concat(data.result),
          loadingMore: false
        })
      }
    })
  },
  // 获取更多笑话
  getMoreJokes () {
    this.setData({
      loadingMore: true
    })
    this.getJokes()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取最新笑话
    wx.showLoading({
      title: '加载中...',
      icon: 'loading'
    })
    this.getJokes()
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
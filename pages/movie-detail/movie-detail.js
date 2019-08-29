// pages/movie-detail/movie-detail.js

import { HTTP } from '../../utils/http.js'
let http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: null,
    comments: [],
    videoSrc: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const id = options.id // || '27180759'
    this.getMovieDetail(id)
  },
  // 获取电影详情
  getMovieDetail: function (id) {
    wx.showLoading({
      title: '加载中...',
      mask: true,
      icon: 'loading'
    })
    http.request({
      url: '/classic/getMovieDetail',
      data: {
        id
      },
      success: data => {
        wx.hideLoading()
        data.directors = this.getDir(data.directors)
        data.casts = this.getDir(data.casts)
        this.setData({
          movie: data,
          comments: data.popular_comments
        })
        // console.log(this.data.comments)
      }
    })
  },
  // 处理导演和演员
  getDir: function (edis) {
    let ed = ''
    edis.forEach(item => {
      ed += ' / ' + item.name
    })
    return ed.slice(2)
  },
  // 播放预告片
  showVideo: function (event) {
    this.setData({
      videoSrc: event.currentTarget.dataset.url
    })
  },
  // 关闭视频播放
  closeVideo () {
    this.setData({
      videoSrc: ''
    })
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
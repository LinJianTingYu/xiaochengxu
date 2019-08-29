// pages/paly/news.js
import { HTTP } from '../../../utils/http.js'
let http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: null,
    currentType: 'top',
    types: [
      { value: 'top', label: '头条' },
      { value: 'shehui', label: '社会' },
      { value: 'guonei', label: '国内' },
      { value: 'guoji', label: '国际' },
      { value: 'yule', label: '娱乐' },
      { value: 'tiyu', label: '体育' },
      { value: 'junshi', label: '军事' },
      { value: 'keji', label: '科技' },
      { value: 'caijing', label: '财经' },
      { value: 'shishang', label: '时尚' }
    ]
  },

  // 获取新闻
  getNews(type) {
    wx.showLoading({
      title: '加载中...',
      icon: 'loading'
    })
    http.request({
      url: "/juhe/news",
      data: {
        type
      },
      success: data => {
        wx.hideLoading()
        this.setData({
          news: data.result.data
        })
      }
    })
  },
  // 改变新闻类型
  changeType(event) {
    const type = event.currentTarget.dataset.value
    this.setData({
      currentType: type
    })
    this.getNews(type)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNews('top')
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
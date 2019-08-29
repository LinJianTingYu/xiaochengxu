// pages/today/today.js
import { HTTP } from '../../../utils/http.js'
import { formatTime } from '../../../utils/util.js'
let http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weatherInfo: null,
    laohuangli: null,
    histories: null,
    historyDetail: null,
    todayWeather: null,
    historyDetail: null,
    pics: null
  },

  getWeather() {
    // 获取城市天气
    http.request({
      url: '/juhe/weather',
      data: {
        city: '成都'
      },
      success: data => {
        console.log(data)
        this.setData({
          todayWeather: data.data[0]
        })
        wx.setStorage({
          key: "weather",
          data: JSON.stringify(data.data)
        })
      }
    })
  },
  getLaoHuangLi() {
    // 黄历
    http.request({
      url: '/juhe/laohuangli',
      data: {
        date: formatTime(new Date()).split(' ')[0].replace(/\//g, '-')
      },
      success: data => {
        this.setData({
          laohuangli: data.result
        })
      }
    })
  },
  getHistories() {
    // 历史事件列表
    http.request({
      url: '/juhe/histories',
      data: {
        date: [new Date().getMonth() + 1, new Date().getDate()].join('/')
      },
      success: data => {
        const histories = data.result.reverse().map(item => {
          item.date = item.date.match(/(\S*)年/g)[0]
          return item
        })
        this.setData({
          histories
        })
      }
    })
  },
  // 打开历史详情
  getHistoryDetail (event) {
    wx.navigateTo({
      url: `../history-detail/history-detail?id=${event.currentTarget.dataset.id}`,
    })
  },
  // 打开天气详情页面
  goWeather () {
    wx.navigateTo({
      url: '../weather/weather',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather()
    this.getLaoHuangLi()
    this.getHistories()
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
// pages/classic/classic.js
import { HTTP } from '../../utils/http.js'
let http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: {},
    latest: true,
    first: false,
    latestIndex: null,
    currentIndex: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http.request({
      url: "/classic/latest",
      success: res => {
        this.setData({
          currentData: res,
          currentIndex: res.index,
          latestIndex: res.index
        })
        console.log(1)
      }
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
  prevPage () {
    let index = this.data.currentIndex
    if (index == 1) return
    this.setData({
      first: false
    })
    http.request({
      url: "/classic/" + index + '/previous',
      success: res => {
        this.setData({
          currentData: res,
          currentIndex: res.index
        })
        if (res.index === 1) {
          this.setData({
            latest: true
          })
        }
      }
    })
  },
  nextPage () {
    let index = this.data.currentIndex
    if (index == 13) return
    this.setData({
      latest: false
    })
    http.request({
      url: "/classic/" + index + '/next',
      success: res => {
        this.setData({
          currentData: res,
          currentIndex: res.index
        })
        if (res.index === 13) {
          this.setData({
            first: true
          })
        }
      }
    })
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

  },
  changeIndex (currentData) {
    // 编号补位
    var index = ''
    if (currentData.index < 10) {
      index = "0" + currentData.index
    } else {
      index = currentData.index
    }
    this.setData({
      currentIndex: index
    })
  }
})
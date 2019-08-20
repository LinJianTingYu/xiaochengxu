// pages/classic-detail/classic-detail.js
import { HTTP } from '../../utils/http.js'
let http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: {},
    currentIndex: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'currenDetail',
      success: (res)=> {
        this.setData({
          currentData: res.data
        })
        this.changeIndex(res.data)

        console.log(this.data.currentIndex)
      },
    })
    // http.request({
    //   url: "classic/" + options.type + '/' + options.id,
    //   success: res => {
    //     this.setData({
    //       currentData: res
    //     })
    //   }
    // })
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

  },
  changeIndex(currentData) {
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
// pages/today/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todayWeather: null,
    future: null,
    hoursWeather: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'weather',
      success: res => {
        const weather = JSON.parse(res.data)
        console.log(weather)
        // 获取现在需要显示的时间段天气/每个三小时显示，每天从8点开始
        const hours = [...weather[0].hours, ...weather[1].hours]
        const start = Math.floor((new Date().getHours() - 8) / 3)
        this.setData({
          todayWeather: weather[0],
          future: weather.slice(1),
          hoursWeather: hours.slice(start, start + 8)
        })
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
// pages/today/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todayWeather: null,
    future: null,
    hoursWeather: null,
    index_icons: [
      {
        title: "紫外线指数",
        icon: "icon-sun",
        desc: "辐射较弱，涂擦SPF12-15、PA+护肤品。"
      },
      {
        title: "</em><em>",
        icon: "icon-wuranxingshi",
        desc: "春天不减肥，夏天徒伤悲。天气较舒适，快去运动吧。"
      },
      {
        title: "健臻·血糖指数",
        icon: "icon-health",
        desc: "气温多变，血糖易波动，请注意监测。"
      },
      {
        title: "穿衣指数",
        icon: "icon-Clothes",
        desc: "适合穿T恤、短薄外套等夏季服装。"
      },
      {
        title: "洗车指数",
        icon: "icon-car",
        desc: "天气较好，适合擦洗汽车。"
      },
      {
        title: "空气污染扩散指数",
        icon: "icon-wuranxingshi",
        desc: "易感人群应适当减少室外活动。"
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let weather = 
    //     weather = JSON.parse(weather)
    //     console.log(weather)
    //     // 获取现在需要显示的时间段天气/每个三小时显示，每天从8点开始
    //     const hours = [...weather[0].hours, ...weather[1].hours]
    //     const start = Math.floor((new Date().getHours() - 8) / 3)
    //     this.setData({
    //       todayWeather: weather[0],
    //       future: weather.slice(1),
    //       hoursWeather: hours.slice(start, start + 8)
    //     })
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
// pages/entertainment/entertainment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      {
        title: '电影',
        name: 'Movie',
        info: '找部片子看看',
        icon: '/assets/img/movie.jpg'
      },
      {
        title: '书籍',
        name: 'Book',
        info: '做个文艺青年',
        icon: '/assets/img/book.jpg'
      },
      {
        title: '笑话',
        name: 'Joke',
        info: '轻松一下吧',
        icon: '/assets/img/joke.jpg'
      },
      {
        title: '新闻',
        name: 'News',
        info: '都有哪些大事',
        icon: '/assets/img/news.jpg'
      }
    ]
  },

  handleRoute (event) {
    const type = event.currentTarget.dataset.name
    switch (type) {
      case 'Movie':
        wx.navigateTo({
          url: "../movie/movie"
        })
        return
      case 'Book':
        wx.navigateTo({
          url: "../book/book"
        })
        return
      case "Joke":
        wx.navigateTo({
          url: '../paly/joke/joke',
        })
        return
      case "News":
        wx.navigateTo({
          url: '../paly/news/news',
        })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
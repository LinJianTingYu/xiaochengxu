// pages/movie/movie.js
import url from '../../utils/url.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // start: {
    //   new: 0,
    //   comming: 0,
    //   top: 0,
    //   theater: 0
    // },
    TheatersMovies: [],
    topMovies: [],
    newMovies: [],
    epicMovies: [],
    commingMovies: [],
    typeTitle: {
      theater: '影院热映',
      top: '豆瓣Top250',
      new: '新片',
      comming: '即将上映'
      // art: '文艺片',
      // epic: '史诗片',
      // comedy: '喜剧片',
      // Cartoon: '动画片'
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取热映电影
    url.getTheatersMovies(0, 10).then(data => {
      this.setData({
        TheatersMovies: this.data.TheatersMovies.concat(data.subjects)
      })
    })
    // 获取即将上映
    url.getComingMovies(0, 10).then(data => {
      this.setData({
        commingMovies: this.data.commingMovies.concat(data.subjects)
      })
    })
    // 获取豆瓣top250
    url.getTopMovies(0, 10).then(data => {
      this.setData({
        topMovies: this.data.topMovies.concat(data.subjects)
      })
    })
    // 获取新片单
    url.getNewMovies(0, 10).then(data => {
      this.setData({
        newMovies: this.data.newMovies.concat(data.subjects)
      })
    })
  },
  // 展示电影详情
  goMovieDetail (event) {
    wx.navigateTo({
      url: `../movie-detail/movie-detail?id=${event.detail.id}`,
    })
  },
  showMoreMovie (title) {
    wx.navigateTo({
      url: `../movie-list/movie-list?title=${title.detail}`,
    })
  },
  // 打开搜索电影页面
  handleSearch () {
    wx.navigateTo({
      url: '../search/search',
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
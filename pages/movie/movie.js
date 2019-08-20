// pages/movie/movie.js
import { HTTP } from '../../utils/http.js'
let http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: {
      new: 0,
      comming: 0,
      top: 0,
      theater: 0
    },
    TheatersMovies: [],
    loadingMore: false,
    isShowMovieList: false,
    moreMovieTitle: '',
    moreMovies: [],
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
  // getMovies () {
  //   return TheatersMovies.slice(0,6)
  // },
  // 获取热映电影
  getTheatersMovies(start, count) {
    http.request({
      url: '/classic/getTheatersMovies',
      data: {
        start,
        count
      },
      success: data => {
        this.setData({
          loadingMore: false,
          TheatersMovies: this.data.TheatersMovies.concat(data.subjects)
        })
      }
    })
  },
  // 获取即将上映
  getComingMovies(start, count) {
    http.request({
      url: '/classic/commingMovie',
      data: {
        start,
        count
      },
      success: data => {
        this.setData({
          loadingMore: false,
          commingMovies: this.data.commingMovies.concat(data.subjects)
        })
      }
    })
  },
  // 获取豆瓣top250
  getTopMovies(start, count) {
    http.request({
      url: '/classic/getTopMovis',
      data: {
        start,
        count
      },
      success: data => {
        this.setData({
          loadingMore: false,
          topMovies: this.data.topMovies.concat(data.subjects)
        })
      }
    })
  },
  // 获取新片单
  getNewMovies(start, count) {
    http.request({
      url: '/classic/getNewMovis',
      data: {
        start,
        count
      },
      success: data => {
        this.setData({
          loadingMore: false,
          newMovies: this.data.newMovies.concat(data.subjects)
        })
      }
    })
  },
  // 展示某一类型的电影
  showMoreMovie(title) {
    let Movies = this.getMoreMovies(title.detail)
    const moreMovies = Movies.map(item => {
      let ed = ''
      let cats = ''
      item.directors.forEach(i => {
        ed += ' / ' + i.name
      })
      item.casts.forEach(i => {
        cats += ' / ' + i.name
      })
      item.directors = ed.slice(2)
      item.casts = cats.slice(2)
      return item
    })
    this.setData({
      isShowMovieList: true,
      moreMovieTitle: title.detail,
      moreMovies
    })
  },
  // 确定展示某一个类型的电影
  getMoreMovies(title) {
    switch (title) {
      // case '文艺片':
      //   return this.artMovies
      // case '史诗片':
      //   return this.epicMovies
      // case '喜剧片':
      //   return this.comedyMovies
      // case '动画片':
      //   return this.cartoonMovies
      case '影院热映':
        return this.data.TheatersMovies
      case '豆瓣Top250':
        return this.data.topMovies
      case '新片':
        return this.data.newMovies
      case '即将上映':
        return this.data.commingMovies
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTheatersMovies(0, 10)
    this.getTopMovies(0, 10)
    this.getNewMovies(0, 10)
    this.getComingMovies(0, 10)
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
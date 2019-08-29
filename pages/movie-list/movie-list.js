// components/entertainment/movie-list/movie-list.js

import url from '../../utils/url.js'
Page({
  /**
   * 组件的属性列表
   */
  // data: {
  //   // loadingMore: {
  //   //   type: Boolean
  //   // },
  //   // title: {
  //   //   type: String
  //   // },
  //   // movies: {
  //   //   type: Array
  //   // }
  // },

  /**
   * 组件的初始数据
   */
  data: {
    movies: [],
    currentType: '',
    start: 0,
    loadingMore: false,
    tipsText: "正在加载中..."
  },
  // 确定展示某一个类型的电影
  getMovies(title) {
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
        // 获取热映电影
        url.getTheatersMovies(this.data.start, 10).then(data => {
          wx.hideLoading()
          const movies = data.subjects.map(item => {
            item.directors = this.getDir(item.directors)
            item.casts = this.getDir(item.casts)
            return item
          })
          this.setMovieData(movies)
        })
        break
      case '豆瓣Top250':
        // 获取豆瓣top250
        url.getTopMovies(this.data.start, 10).then(data => {
          wx.hideLoading()
          const movies = data.subjects.map(item => {
            item.directors = this.getDir(item.directors)
            item.casts = this.getDir(item.casts)
            return item
          })
          this.setMovieData(movies)
        })
        break
      case '新片':
        // 获取新片单
        url.getNewMovies(this.data.start, 10).then(data => {
          wx.hideLoading()
          const movies = data.subjects.map(item => {
            item.directors = this.getDir(item.directors)
            item.casts = this.getDir(item.casts)
            return item
          })
          this.setMovieData(movies)
        })
        break
      case '即将上映':
        // 获取即将上映
        url.getComingMovies(this.data.start, 10).then(data => {
          wx.hideLoading()
          const movies = data.subjects.map(item => {
            item.directors = this.getDir(item.directors)
            item.casts = this.getDir(item.casts)
            return item
          })
          this.setMovieData(movies)
        })
    }
  },
  // 设置数据
  setMovieData(movies) {
    if (!movies.length) {
      this.setData({
        tipsText: "我也是有底线的"
      })
      return
    }
    this.setData({
      movies: this.data.movies.concat(movies),
      loadingMore: false
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
  // 展示电影详情
  showMovieDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../movie-detail/movie-detail?id=${id}`,
    })
  },
  // 获取电影
  getMoreMovies () {},
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
      mask: true,
      icon: 'loading'
    })
    this.setData({
      currentType: options.title
    })
    this.getMovies(options.title)
    wx.setNavigationBarTitle({
      title: options.title
    })
  },
  // 上拉触底
  onReachBottom: function () {
    this.setData({
      loadingMore: true
    })
  },
  scrollBottom() {
    this.setData({
      start: this.data.start + 10,
      loadingMore: true
    })
    this.getMovies(this.data.currentType)
  }
})

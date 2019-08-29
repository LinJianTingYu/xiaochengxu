// components/entertainment/search.js
import { HTTP } from '../../utils/http.js'
let http = new HTTP()
Page({
  /**
   * 组件的属性列表
   */

  /**
   * 组件的初始数据
   */
  data: {
    hotMovies: [],
    suggestMovies: null,
    query: '',
    searchHistory: []
  },
  // 获取热门搜索的电影
  getHot() {
    http.request({
      url: '/classic/hotMovie',
      data: {
        num: 10
      },
      success: res => {
        this.setData({
          hotMovies: res.subjects
        })
      }
    })
  },
  // 搜索
  handleSearch (event) {
    http.request({
      url: '/classic/suggest',
      data: {
        query: event.detail.value
      },
      success: res => {
        this.setData({
          suggestMovies: res
        })
      }
    })
  },
  // 做双向绑定
  queryChange (event) {
    this.setData({
      query: event.detail.value
    })
  },
  // 关闭搜索页面
  closeSearch () {
    this.triggerEvent('closeSearch')
  },
  // 清空搜索框内容
  clearSearch() {
    this.setData({
      query: '',
      suggestMovies: null
    })
  },
  // 展示电影详情页面
  showMovieDetail(event) {
    const id = event.currentTarget.dataset.id
    const title = event.currentTarget.dataset.title
    const searchHistory = this.data.searchHistory
    if (searchHistory.length === 4) {
      searchHistory.splice(0, 1, {
        title,
        id
      })
    } else {
      searchHistory.unshift({
        title,
        id
      })
    }
    this.setData({
      searchHistory
    })
    console.log(this.data.searchHistory)
    wx.navigateTo({
      url: `../movie-detail/movie-detail?id=${id}`
    })
  },
  onLoad () {
    this.getHot()
  }
  /**
   * 组件的方法列表
   */
})

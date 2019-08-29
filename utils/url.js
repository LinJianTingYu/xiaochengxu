
import { HTTP } from './http.js'

let http = new HTTP()
var url = {
  // 获取热映电影
  getTheatersMovies: function (start, count) {
    return new Promise(resolve => {
      http.request({
        url: '/classic/getTheatersMovies',
        data: {
          start,
          count
        },
        success: data => {
          resolve(data)
        }
      })
    })
  },
  // 获取即将上映
  getComingMovies: function (start, count) {
    return new Promise(resolve => {
      http.request({
        url: '/classic/commingMovie',
        data: {
          start,
          count
        },
        success: data => {
          resolve(data)
        }
      })
    })
  },
  // 获取豆瓣top250
  getTopMovies: function (start, count) {
    return new Promise(resolve => {
      http.request({
        url: '/classic/getTopMovis',
        data: {
          start,
          count
        },
        success: data => {
          resolve(data)
        }
      })
    })
  },
  // 获取新片单
  getNewMovies: function (start, count) {
    return new Promise(resolve => {
      http.request({
        url: '/classic/getNewMovis',
        data: {
          start,
          count
        },
        success: data => {
          resolve(data)
        }
      })
    })
  }
}
export default url
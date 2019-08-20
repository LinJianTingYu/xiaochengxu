// components/search/search.js
import { HTTP } from '../../utils/http.js'
let http = new HTTP()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    val: '',
    hot_list: [],
    searchResult: [],
    searchHistory: [],
    isShowResult: false,
    start: 0,
    count: 20,
    isSearchMore: false,
    loadingCenter: false
  },
  created(){
    http.request({
      url: 'book/hot_keyword',
      success: res => {
        this.setData({
          hot_list: res.hot
        })
      }
    })
  },
  attached (){
    const self = this
    wx.getStorage({
      key: 'searchHistory',
      success: function (res) {
        self.setData({
          searchHistory: res.data
        })
      },
      fail() {}
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    closeSearch(){
      this.triggerEvent("closeSearch")
    },
    delVal(){
      this.setData({
        val: '',
        searchResult: [],
        isShowResult: false
      })
    },
    valChange(e){
      this.setData({
        val: e.detail.value
      })
    },
    searchItem(e){
      const query = e.currentTarget.dataset.query || e.detail.value
      const start = this.data.start
      const count = this.data.count
      this.setData({
        val: query,
        loadingCenter: true
      })
      this.searchBook(query, start, count)
    },
    searchBook(query, start, count) {
      http.request({
        url: 'book/search',
        data: {
          start: start,
          count: count,
          summary: 1,
          q: query
        },
        success: res => {
          this.setData({
            isShowResult: true,
            searchResult: res.books,
            loadingCenter: false
          })
          this.selectHistory(query, this)
        }
      })
    },
    selectHistory(query, self){
      let searchHistory = this.data.searchHistory
      // 判断是否已经搜索过
      if (!searchHistory.length){
        searchHistory.push(query)
      }else{
        // 以前搜索过就先将以前的删除
        searchHistory.forEach((item,index)=>{
          if(item == query){
            searchHistory.splice(index,1)
          }
        })
        searchHistory.push(query)
      }
      wx.setStorage({
        key: 'searchHistory',
        data: searchHistory,
      })
      this.setData({
        searchHistory: searchHistory
      })
    },
    searchMore(){
      this.setData({
        isSearchMore: true
      })
      const query = this.data.val
      const start = this.data.start + 20
      const count = this.data.count + 20
      let searchResult = this.data.searchResult
      http.request({
        url: 'book/search',
        data: {
          start: start,
          count: count,
          summary: 1,
          q: query
        },
        success: res => {
          console.log(res, searchResult)
          this.setData({
            searchResult: searchResult.concat(res.books),
            isSearchMore: false
          })
        }
      })
    },
    scrollBottom(){
      this.searchMore()
    }
  }
})

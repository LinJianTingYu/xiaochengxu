// pages/detail/detail.js
import { HTTP } from '../../utils/http.js'
let http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookdetail: {},
    summary: '',
    short_comment: null,
    favor: null,
    isShowComfirm: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http.request({
      url: 'book/' + options.mid + '/detail',
      success: res => {
        let summary = res.summary
        summary.replace('\n', '\n')
        console.log(summary)
        this.setData({
          bookdetail: res,
          summary: summary
        })
      }
    })
    
    // 获取短评
    http.request({
      url: 'book/' + options.mid + '/short_comment',
      success: res => {
        this.setData({
          short_comment: res
        })
      }
    })
    
    //获取点赞数量
    http.request({
      url: 'book/' + options.mid + '/favor',
      success: res => {
        this.setData({
          favor: res
        })
      }
    })
  },
  
  // 更新评论
  resetcomments(e){
    this.setData({
      short_comment: comments
    })
  },
  // 点击评论展示提示消息
  showComfirm(){
    this.setData({
      isShowComfirm: true
    })
  },
  onCancel(){
    this.setData({
      isShowComfirm: false
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
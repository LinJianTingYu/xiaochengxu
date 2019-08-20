// pages/my/my.js
import { HTTP } from '../../utils/http.js'
let http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myFavor: null,
    typeText: {
      100: "电影",
      200: "音乐",
      300: "句子"
    },
    canIUse: false,
    favorCount: null,
    userInfo: null,
    currentIndex: '01'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    // http.request({
    //   url: 'classic/favor',
    //   success: res => {
    //     this.setData({
    //       myFavor: res
    //     })
    //   }
    // })
    http.request({
      url: 'book/favor/count',
      success: res => {
        this.setData({
          favorCount: res.count
        })
      }
    })
    // 查看是否授权
    wx.getSetting({
      success: (res)=> {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (data) => {
              this.setData({
                hasUserInfo: true,
                userInfo: data.userInfo
              })
            }
          })
        }
      }
    })
  },
  // 显示详情
  showDetail(e){
    const selectItem = e.currentTarget.dataset.item
    wx.setStorage({
      key: 'currenDetail',
      data: selectItem
    })
    wx.navigateTo({
      url: '/pages/classic-detail/classic-detail?id=' + selectItem.id + "&type=" + selectItem.type,
    })
  },
  bindGetUserInfo(e){
    let userInfo = e.detail.userInfo
    if (userInfo) {
      this.setData({
        hasUserInfo: true,
        userInfo: userInfo
      })
    }
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
    wx.request({
      url: 'https://evening-ocean-46832.herokuapp.com/api/classic/favor',
      success: res => {
        console.log(res)
        this.setData({
          myFavor: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(1)
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
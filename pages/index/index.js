//index.js
//获取应用实例
var Api = require('../../utils/api.js');
const app = getApp()

Page({
  data: {
    title:"首页列表",
    motto: 'Hello World',
    userInfo: {},
    asUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    partInfo:{}
  },
  //事件处理函数
  onLoad: function (data) {
    this.bindViewTap();
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 2000
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  bindViewTap: function (data) {
    var that =this;
    if (!data) data = {};
    if (!data.page) data.page = 1;
    //部分精华
    if (!data.top) data.top = true;
    if (!data.limit) data.limit = 15;
    if (!data.mdrender) data.mdrender = false;
    wx.request({
      url: Api.getTopics(data),
      success: function (res) {
        console.log(res)
        that.setData({
          partInfo: res.data.data
        })
      }
    })
  },
  author_click:function(e){
    wx.navigateTo({
      url: '/pages/position/position?data=' + e.currentTarget.id,
    })
  },
  getUserInfo: function(e) {
    console.log(e)
     app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

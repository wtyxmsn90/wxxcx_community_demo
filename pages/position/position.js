// pages/position/position.js
var Api = require('../../utils/api.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentAL:null
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options,datas) {
    var content_id = options.data;
    var that = this;
    if (!datas) datas = {};
    if (!datas.mdrender) datas.mdrender = true;
    wx.request({
      url: Api.getTopicByID(content_id, datas),
      success: function (res) {
        console.log(res.data.data.content)
        that.setData({
          contentAL : res.data.data.content
        })
      }
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
// pages/index/index.js
var common = require('../../static/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: common.objUrl("img"),
    isZai: 0,//默认为0 不在线
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '客资'
    })
  },
  isZai:function(e){
    var isZai = common.eventdata(e).iszai;
    
    if (isZai == 0){
      // 切换为在线
      isZai = 1
    }else{
      // 切换为离线
      isZai = 0;
    }
    this.setData({
      isZai: isZai,
    })
  },
  userTap:function(){
    wx.navigateTo({
      url: '/pages/userInfo/userInfo',
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
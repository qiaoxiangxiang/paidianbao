// pages/dsSJQ/dsSJQ.js
var common = require("../../static/common.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: common.objUrl("img"),
    YMDBoxBtnNum: 0,
    dsList:[
      [{ name: "总客资", num: '1' }, { name: "有效量", num: '1' }, { name: "有效率", num: '100%' }, { name: "待定量", num: '1' }],
      [{ name: "无效量", num: '0' }, { name: "无效率", num: '0%' }, { name: "入店量", num: '0' }, { name: "成交量", num: '0' }],
      [{ name: "入店成交率", num: '0%' }, { name: "毛客资入店率", num: '0%' }, { name: "有效客资入店率", num: '10%' }, { name: "电商花费", num: '0.0' }],
      [{ name: "毛客资成交率", num: '0%' }, { name: "营业额", num: '0' }, { name: "投入产出比", num: '0.0' }, { name: "毛客资成本", num: '0.0' }],
      [{ name: "有效客资成本", num: '0.0' }, { name: "入店成本", num: '0.0' }, { name: "成交成本", num: '0.0' }, { name: "成交均价", num: '0.0' }],
      [{ name: "已收金额", num: '0' }, { name: "已加微信", num: '0' }, { name: "未加微信", num: '0' }, { name: "待通过微信", num: '1' }],
      
    ],
    dsList1: [
      [{ name: "总客资", num: '1' }, { name: "有效量", num: '1' }, { name: "有效率", num: '100%' }, { name: "待定量", num: '1' }],
      [{ name: "无效量", num: '0' }, { name: "无效率", num: '0%' }, { name: "入店量", num: '0' }, { name: "成交量", num: '0' }],
      [{ name: "入店成交率", num: '0%' }, { name: "毛客资入店率", num: '0%' }, { name: "有效客资入店率", num: '10%' }, { name: "毛客资成交率", num: '0.0' }],
      [{ name: "营业额", num: '0' }, { name: "已收金额", num: '0' }, { name: "成交均价", num: '0' }]
    ],
    dsList2: [
      [{ name: "总客资", num: '1' }, { name: "有效量", num: '1' }, { name: "有效率", num: '100%' }, { name: "待定量", num: '1' }],
      [{ name: "无效量", num: '0' }, { name: "无效率", num: '0%' }, { name: "入店量", num: '0' }, { name: "成交量", num: '0' }],
      [{ name: "入店成交率", num: '0%' }, { name: "毛客资入店率", num: '0%' }, { name: "有效客资入店率", num: '10%' }, { name: "毛客资成交率", num: '0.00%' }],
      [{ name: "电商花费", num: '0.00' }, { name: "营业额", num: '0' }, { name: "投入产出比", num: '0.0' }, { name: "毛客资成本", num: '0.0' }],
      [{ name: "有效客资成本", num: '0.0' }, { name: "入店成本", num: '0.0' }, { name: "成交成本", num: '0.0' }, { name: "成交均价", num: '0.0' }],
      [{ name: "已收金额", num: '0' }]

    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '电商数据墙'
    })
  },
  YMDBoxBtn:function(e){
    var num = common.eventdata(e).num;
    this.setData({
      YMDBoxBtnNum:num
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
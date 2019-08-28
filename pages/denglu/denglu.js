// pages/denglu/denglu.js
var common = require('../../static/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: common.objUrl("img"),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  phone:function(e){
    this.setData({
      phone: e.detail.value,
    })
  },
  password:function(e){
    this.setData({
      password: e.detail.value,
    })
  },
  DLBtn:function(){
    var self = this;
    var parse = {
      username: self.data.phone,
      password: self.data.password,
    }
    console.log(parse)
    common.napaiGet("/pdb/login/get_company_list_by_phone", parse, function (res) {
      console.log(res.data)
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
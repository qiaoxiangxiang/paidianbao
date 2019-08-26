// pages/dsluke/dsluke.js
var common = require("../../static/common.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: common.objUrl("img"),
    paishe: ["婚礼", "婚礼1", "婚礼", "婚礼"],
    tibaoYI: ["第一组", "第二组", "第二组"],//组别
    tibaoEr:[
      ["1-1", '1-2', '1-3'],
      ["2-1", '2-2', '2-3','2-4','2-5'],
      ["3-1", '3-2', '3-3','3-4','3-5','3-6'],
    ],//姓名
    tibaoErNum: [0,0],//默认组别O
    istibao: false,//提报人选择默认不显示
    xingbie: ['未知', "男", "女"],
    xingbieNum:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  tibaoTap:function(){
    this.setData({
      istibao: true,
    })
  },
  bindChange:function(e){
    var value = e.detail.value;
    var tibaoErNum = this.data.tibaoErNum;
    // if (value[0] != tibaoErNum[0]){
      this.setData({
        tibaoErNum: value,
      })
    // }
    console.log(this.data.tibaoErNum)
  },
  cityQuxiao: function () {
    this.setData({
      istibao: false,
      tibaoErNum: [0, 0],
    })
  },
  cityQueding: function () {
    var tibaoErNum = this.data.tibaoErNum;
    var tibaoYI = this.data.tibaoYI;
    var tibaoEr = this.data.tibaoEr;
    this.setData({
      istibao: false,
      tibaoName: tibaoYI[tibaoErNum[0]] + "/" + tibaoEr[tibaoErNum[0]][tibaoErNum[1]],
      tibaoErNum: [0, 0],
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
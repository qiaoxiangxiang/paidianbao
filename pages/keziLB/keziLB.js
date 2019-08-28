// pages/keziLB/keziLB.js
var common = require("../../static/common.js")
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
    var self = this;
    wx.setNavigationBarTitle({
      title: '客资列表',
      canshu: options.canshu,
    })
    common.napaiGet("/page_config/get_by_cid_and_role", 
      { role:options.canshu,showFlag:true},
      function(res){
        if(res.data.code == 100000){
          var data = res.data.data;
          for(var i=0;i< data.length;i++){
            console.log(data[i].memo)
            if (data[i].memo == '所有客资'){
              data[i].imgSrc = self.data.imgUrl+ '/keziLB/keziLB_19.png';
            } else if (data[i].memo == '新客资') {
              data[i].imgSrc = self.data.imgUrl + '/keziLB/keziLB_22.png';
            } else if(data[i].memo == '待追踪'){
              data[i].imgSrc = self.data.imgUrl + '/keziLB/keziLB_24.png';
            } else if(data[i].memo == '已预约'){
              data[i].imgSrc = self.data.imgUrl + '/keziLB/keziLB_26.png';
            } else if(data[i].memo == '已进店'){
              data[i].imgSrc = self.data.imgUrl + '/keziLB/keziLB_28.png';
            } else if(data[i].memo == '已订单'){
              data[i].imgSrc = self.data.imgUrl + '/keziLB/keziLB_30.png';
            } else if(data[i].memo == '无效'){
              data[i].imgSrc = self.data.imgUrl + '/keziLB/keziLB_32.png';
            }
          }
          self.setData({
            btnList: data,
          })
        }
      }
    )
    common.napaiGet("/plat/query_page_client_info",
      { role: options.canshu, showFlag: true ,
        action: "all",
        channelid: "",
        end: 1567007999,
        filtersql: "",
        linklimit: "0",
        page: 1,
        pmslimit: "0",
        role: options.canshu,
        shopid: "",
        size: 20,
        sourceid: "",
        sparesql: "",
        staffid: "",
        start: 1566921600,
        timetype: "2",
        typeid: "",
      },
      function (res) {
        if (res.data.code == 100000) {
          var data = res.data.data;
          // action: "all"
          // channelid: ""
          // end: 1567007999
          // filtersql: ""
          // linklimit: "0"
          // page: 1
          // pmslimit: "0"
          // role: "zjsyy"
          // shopid: ""
          // size: 20
          // sourceid: ""
          // sparesql: ""
          // staffid: ""
          // start: 1566921600
          // timetype: "2"
          // typeid: ""
          self.setData({
            btnList: data,
          })
        }
      }
    )
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
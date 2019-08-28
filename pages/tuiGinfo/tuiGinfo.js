// pages/keziDetail/keziDetail.js
var common = require('../../static/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: common.objUrl('img'),
    isDetail: true,
    detailNum: 0,//选项卡
    opacityNum:0,//渐隐渐现
    fixedList:{},
    isFixed: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.setNavigationBarTitle({
      title: '客资详情'
    })
    // index == 1 是编辑推广信息  
    // index == 2 是主管纠错
    this.setData({
      fixedList: this.data.fixedList1,
      index: options.index,
    })
  },
  detailGD:function(){
    this.setData({
      isDetail: this.data.isDetail?false:true,
    })
    console.log(this.data.isDetail)
  },
  btnClick:function(e){
    this.setData({
      detailNum:common.eventdata(e).index
    })
  },
  // 弹框显示
  FixedBtn:function(e){
    if(common.eventdata(e).index == 0){
      this.setData({
        fixedList: this.data.fixedList1
      })
    }else{
      this.setData({
        fixedList: this.data.fixedList2
      })
    }
    this.setData({
      isFixed: true
    })
    var self = this;
    var timer = setInterval(function () {
      var opacityNum = self.data.opacityNum * 10;
      opacityNum++;
      if (opacityNum <= 10) {
        self.setData({
          opacityNum: opacityNum / 10
        })
      } else {
        clearInterval(timer);
        self.setData({
          opacityNum: 1
        })
      }

    }, 40)
  },
  // 弹框隐藏
  detailBtnqx:function(){
    var self = this;
    self.setData({
      isFixed: false,
      fixedList:{},
    });
    
    var timer = setInterval(function(){
      var opacityNum = self.data.opacityNum*10;
      opacityNum--;
      if (opacityNum >0){
        self.setData({
          opacityNum: opacityNum/10
        })
      }else{
        clearInterval(timer);
        self.setData({
          opacityNum: 0
        })
      }
      
    },40)
  },
  FixedBtn: function (e) {
    var index = common.eventdata(e).index;
    if (index == 0) {
      //返回
      wx.navigateBack({
        delta: 1
      })
    } else {

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
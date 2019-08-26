// pages/timer/timer.js
var common = require("../../static/common.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: common.objUrl("img"),
    isTimerLB: false,
    timerDiff: 0,//区分类别 0 时间类型 1 日期范围 2 自定义时间
    timerFW:'',
    starTime: '',
    endTime: '',
    ZDstarTime: '',
    ZDendTime:'',
    timerLBS:['录入时间','下次跟踪','预约到店时间','到店时间','订单赶时间','预拍时间'],
    timerLBTxt: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '客资列表'
    })
    var dayNew = new Date().getTime();
    this.timerZ(dayNew);
  },
  // 时间类型 
  timerLB:function(e){
    var index = common.eventdata(e).index;
    var timerLBTxt = '';
    console.log(index)
    if (index){
      timerLBTxt = this.data.timerLBS[index-0];
    }
    this.setData({
      isTimerLB: this.data.isTimerLB?false:true,
      timerDiff: 0,
      timerLBTxt: timerLBTxt,
      timerFW: '',
      timerDiff: 1,
      ZDstarTime: '',
      ZDendTime: '',
    })
  },
  // 日期范围 
  timer1:function(e){
    var timerNum = common.eventdata(e).timernum;
    console.log(common.eventdata(e))
    console.log(timerNum)
    // 0今日 1昨日 2本周 3上周 4本月 5上月 6本季度 7上季度
    var dayNew = new Date().getTime();
    var timerFW = "";
    if (timerNum == 0){
      // 今天
      var newDay = this.timerZ(dayNew);
      timerFW = newDay;
    } else if (timerNum == 1){
      // 昨天
      var newDay = this.timerZ(new Date(this.timerZ(dayNew)).getTime() - 24*60*60*1000);
      timerFW = newDay;
    } else if (timerNum == 2) {
      // 本周
      // getDay() 0 日 1一 2二 3三 4四 5五 6六
      var week = new Date().getDay();
      var newday = this.timerZ(dayNew);
      var newDay1 = '';
      if (week == 0){
        week = 7;
      }
      newDay1 = this.timerZ(new Date(this.timerZ(dayNew)).getTime() - (week - 1) * 24 * 60 * 60 * 1000);
      
      console.log(week);
      timerFW = newday + '至' + newDay1;

    } else if (timerNum == 3) {
      // 上周
      var week = new Date().getDay();
      var newDay1 = '';
      if (week == 0) {
        week = 7;
      }
      newDay1 = this.timerZ(new Date(this.timerZ(dayNew)).getTime() - (week) * 24 * 60 * 60 * 1000);
      var newday = this.timerZ(new Date(newDay1).getTime() - 6 * 24 * 60 * 60 * 1000);
      timerFW = newday + '至' + newDay1;

    } else if (timerNum == 4) {
      // 本月

    } else if (timerNum == 5) {
      // 上月
    } else if (timerNum == 6) {
      // 本季度
    } else if (timerNum == 7) {
      // 上季度
    }
    this.setData({
      timerFW: timerFW,
      timerDiff: 1,
      ZDstarTime: '',
      ZDendTime: '',
      timerLBTxt: '',
    })
  },
  timerZ:function(timer){
    var days = new Date(timer - 0);
    var year = days.getFullYear();
    var month = days.getMonth() + 1;
    var day = days.getDate();

    this.setData({
      starTime: year-50 + '-01-01',
      endTime: year + 20 + '-01-01',
    })
    
    return year + '-' + month + '-' + day;
  },
  // 自定义时间
  timerZD:function(){
    if (this.data.ZDstarTime?false:true){
      common.TanKError('请选择开始时间')
    }
  },
  // 自定义开始时间
  pickerTimeStar:function(e){
    var timer = e.detail.value;
    this.setData({
      ZDstarTime: timer,
      timerLBTxt: '',
      timerFW: '',
      timerDiff: 2,
    })
  },
  // 自定义结束时间
  pickerTimeEnd: function (e) {
    var timer = e.detail.value;
    this.setData({
      ZDendTime: timer,
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
// pages/dsluke/dsluke.js
var common = require("../../static/common.js")
var districts = require('../../static/city.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: common.objUrl("img"),
    paishe: ["婚礼", "婚礼1", "婚礼", "婚礼"],
    tibaoYI: ["第一组", "第二组", "第二组"],//组别
    tibaoEr: [
      ["1-1", '1-2', '1-3'],
      ["2-1", '2-2', '2-3', '2-4', '2-5'],
      ["3-1", '3-2', '3-3', '3-4', '3-5', '3-6'],
    ],//姓名
    tibaoErNum: [0, 0],//默认组别O
    istibao: false,//提报人选择默认不显示
    xingbie: ['未知', "男", "女"],
    xingbieNum: 0,

    isCity: false,//地址弹框显示
    crtyArray: [0, 0, 0],//默认选中
    crty: districts.districts(),//省市区
    sheng: districts.districts()[100000],//默认弹框省
    shi: districts.districts()[110000],//默认弹框市
    qu: districts.districts()[110100],//默认弹框区
    cituXuanZhong: [],//选中的地址 0 省 1市 2区
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  tibaoTap: function () {
    this.setData({
      istibao: true,
    })
  },
  bindChange: function (e) {
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

  // 三级地址
  // 三级框选择地址
  cityJs:function(){
    this.setData({
      isCity: true,
    })
  },
  cityChange: function (e) {
    // var key =common.eventdata(e).key
    var crty = this.data.crty;//所有的省市区值
    var sheng = this.data.sheng;//所有省份值
    var crtyArray = this.data.crtyArray;//上一次选中的数组 [0,0,0]
    var changeArray = e.detail.value;//change后选中的数组 [1,0,0]
    var shengNum = 0;//每一次滑动 默认省为0
    var shiNum = 0;//每一次滑动 默认市为0

    // 判断上一次省的位置 和 滑动后省的位置 是否一致
    if (crtyArray[0] != changeArray[0]) {
      // 不一致 循环省 shengNum++ 直到 shengNum == changeArray[0] 省的位置和累加的位置相同
      for (var i in sheng) {
        if (shengNum == changeArray[0]) {
          // 改变 市的数值
          this.setData({
            shi: crty[i],
          })
          break;
        }
        shengNum++;
      }
      // 默认显示第一个市下面的 区
      var shi = this.data.shi;
      for (var i in shi) {
        if (shiNum == changeArray[1]) {
          // 改变 市的数值
          this.setData({
            qu: crty[i],
          })
          break;
        }
        shiNum++;
      }
    } else if (crtyArray[1] != changeArray[1]) {
      var shi = this.data.shi;
      for (var i in shi) {
        if (shiNum == changeArray[1]) {
          // 改变 市的数值
          this.setData({
            qu: crty[i],
          })
          break;
        }
        shiNum++;
      }
    }
    // 保存这一次的值
    this.setData({
      crtyArray: changeArray
    })
  },
  dizhiXuan: function () {
    this.setData({
      isCity: true
    })
  },
  cityQuxiaos: function () {
    this.setData({
      isCity: false,
      sheng: districts.districts()[100000],//默认省
      shi: districts.districts()[110000],//默认市
      qu: districts.districts()[110100],//默认区
    })
  },
  cityQuedings: function () {
    var crtyArray = this.data.crtyArray;
    var sheng = this.data.sheng, shi = this.data.shi, qu = this.data.qu;
    var shengNum = 0; var shengTxt = '';
    var shiNum = 0; var shiTxt = '';
    var quNum = 0; var quTxt = '';
    // 省的值
    for (var i in sheng) {
      if (shengNum == crtyArray[0]) {
        shengTxt = sheng[i]
      }
      shengNum++;
    }
    // 市的值
    for (var i in shi) {
      if (shiNum == crtyArray[1]) {
        shiTxt = shi[i]
      }
      shiNum++;
    }
    // 区的值
    for (var i in qu) {
      if (quNum == crtyArray[2]) {
        quTxt = qu[i]
      }
      quNum++;
    }
    this.setData({
      dizhiVal: shengTxt + " " + shiTxt + " " + quTxt,
      isCity: false,
      sheng: districts.districts()[100000],//默认省
      shi: districts.districts()[110000],//默认市
      qu: districts.districts()[110100],//默认区
      province: shengTxt,     //省
      city: shiTxt,       //市
      district: quTxt,
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
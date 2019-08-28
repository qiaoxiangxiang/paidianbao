var php_Url = 'https://crm2.napai.cn';
// var php_Url = 'https://1314.qiein.com/jupiter/api';
function userName(){
  wx.getSetting({
    success: res => {
      wx.setStorageSync('shouquan', res.authSetting)
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        wx.getUserInfo({
          success: res => {
            // 可以将 res 发送给后台解码出 unionId
            // this.globalData.userInfo = res.userInf
            wx.setStorageSync('userinfo', res.userInfo)
            console.log(res)
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            // if (this.userInfoReadyCallback) {
            //   this.userInfoReadyCallback(res)
            // }
          }
        })
      }
    }
  })
};
if (!(wx.getStorageSync('shouquan')['scope.userInfo']?true:false)){
  userName();
}
// btn 点击授权
function bindGetUserInfo(e, self) {
  if (e.detail.errMsg == 'getUserInfo:ok') {
    self.setData({
      IsShouQuan: true,
    });
    // 授权成功后查看是否 有username 和 token  只要有一个为空 跳转到绑定手机页
    userName()
  }
}

function objUrl(src) {
  if(src == 'img'){
    return '../image'
  }
};
function eventdata(event) {
  return event.currentTarget.dataset;
};
// 提示框
function TanK(title, parmse) {
  wx.showToast({
    title: title,
    icon: 'succes',
    duration: 1000,
    success: res => {
      parmse
    }
  })

  setTimeout(function () {
    wx.hideToast()
  }, 2000)
};
// 弹框error
function TanKError(title, image, parmse) {
  wx.showToast({
    title: title,
    image: image?image:'../image/error.png',
    duration: 2000,
    success: res => {
      parmse
    }
  })

  setTimeout(function () {
    wx.hideToast()
  }, 2000)
};

// 接口 post
function napaiPost(url, parameter, succes) {
  wx.request({
    url: php_Url + url,
    data: parameter,
    method: 'POST',
    header: {
      cid: wx.getStorageSync('userObj') ? wx.getStorageSync('userObj').usercompanyId : "",
      uid: wx.getStorageSync('userObj') ? wx.getStorageSync('userObj').id : "",
      // token: wx.getStorageSync('userObj') ? wx.getStorageSync('userObj').token : "",
      token: "be19183bb54efd5e9f303476799fce3a",
      
      'Content-type': "application/json;charset=utf-8"
    },

    success: function (res) {
      succes(res);
      if (res.data.code == 9999 || res.data.code == 9998) {
        userName();
      }
    },
    fail: err => {
      console.log(err);
    },
  })
};
// 接口 get
function napaiGet(url, parameter, succes) {
  wx.request({
    url: php_Url + url,
    data: parameter,
    method: 'GET',
    header: {
      cid: wx.getStorageSync('userObj') ? wx.getStorageSync('userObj').usercompanyId : "",
      uid: wx.getStorageSync('userObj') ? wx.getStorageSync('userObj').id : "",
      // token: wx.getStorageSync('userObj') ? wx.getStorageSync('userObj').token : "",
      token: "be19183bb54efd5e9f303476799fce3a",
      'Content-type': "application/x-www-form-urlencoded"
    },

    success: function (res) {
      succes(res)
    },
    fail: err => {
      console.log(err);
    },
  })
};

module.exports = {
  userName  : userName, //获取用户信息
  objUrl    : objUrl,   //获取对应的路径
  eventdata : eventdata,//事件中带过来的参数
  TanKError : TanKError,//失败弹框
  TanK      : TanK,     //成功弹框
  napaiPost : napaiPost,//post请求
  napaiGet  : napaiGet, //get请求
  bindGetUserInfo: bindGetUserInfo,//btn 点击授权
}
function userName(){
  wx.getSetting({
    success: res => {
      console.log(res)
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        console.log(res)
        wx.getUserInfo({
          success: res => {
            // 可以将 res 发送给后台解码出 unionId
            this.globalData.userInfo = res.userInfo
            console.log(res)
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            if (this.userInfoReadyCallback) {
              this.userInfoReadyCallback(res)
            }
          }
        })
      }
    }
  })
};
userName();
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
module.exports = {
  userName  : userName, //获取用户信息
  objUrl    : objUrl,   //获取对应的路径
  eventdata : eventdata,//事件中带过来的参数
  TanKError : TanKError,//失败弹框
  TanK      : TanK,     //成功弹框
}
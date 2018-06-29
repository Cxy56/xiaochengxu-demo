var app = getApp()
var ajax = require('../../../utils/ajax.js')
Page({
  data: {
    
  },
  bindCancel:function (e) {
       e.detail.value =  {};
  },
  bindSave: function(e) {
    var that = this;
    var username = e.detail.value.username;
    var password = e.detail.value.password;

    if (username == ""){
      wx.showModal({
        title: '提示',
        content: '请输入用户名',
        showCancel:false
      })
      return
    }
    if (password == ""){
      wx.showModal({
        title: '提示',
        content: '请输入密码',
        showCancel:false
      })
      return
    }
    let url = "http://vempay-test.nfsq.com.cn/vem-operator/login";
    let data =  {
      username: username,
      password: password,   
    };
//   请求后台登录
    ajax.ajaxRequest(url, 'post', data,'formParams',(response)=>{

      // 在这里把后台给的sessionid保存起来
      wx.setStorageSync("userSESSID",123);
      // 保存用户登录信息
      app.setUserInfo(response.data);
      console.log(`app.globalInfo.userInfo`, app.globalInfo.userInfo);
      wx.switchTab({
        url: '/pages/index/index',
      }); 
    });

     // wx.request({
    //   url: "http://localhost:8080/vem-operator/login",
    //   data: {
    //     username: username,
    //     password: password,
    //     // isNF:'0'     
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   method:"post",
    //   header:{
    //       'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   success: function(res) {
       
    //     if (res.data.resultCode != 1200) {
    //       // 登录错误 
    //       wx.hideLoading();
    //       wx.showModal({
    //         title: '失败',
    //         content: res.data.msg,
    //         showCancel:false
    //       })
    //       return;
    //     }
    //     // 跳转到首页
    //      wx.switchTab({
    //        url: '/pages/index/index',
    //       }); 
    //   }
    // })
  },
  onLoad: function (e) {
    //登录页面加载时候清空sessionId
    wx.setStorageSync('userSESSID',' ')
  },
})
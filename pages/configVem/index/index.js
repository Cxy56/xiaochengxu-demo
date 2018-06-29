Page({
  data:{},
  channelConfig(){
    wx.navigateTo({
      url: '../channelConfig/channelConfig',
    })
  },
  changeVem(){
    wx.navigateTo({
      url: '../changeVem/changeVem',
    })
  }
})
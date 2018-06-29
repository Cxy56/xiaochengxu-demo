var ajax = require('../../../../utils/ajax.js')

Page({
  data:{
    goods: [{
      pic:"../../../assets/online.png",
      name:"货道1",
      minPrice:12,
      originalPrice:15
    },
      {
        pic: "../../../assets/online.png",
        name: "货道2",
        minPrice: 12,
        originalPrice: 15
      },
      {
        pic: "../../../assets/online.png",
        name: "货道3",
        minPrice: 12,
        originalPrice: 15
      },
      {
        pic: "../../../assets/online.png",
        name: "货道3",
        minPrice: 12,
        originalPrice: 15
      },
    ],
  },
  // 跳转到修改货道的页面
  modifyGoods(e){
    console.log(e);
    wx.navigateTo({
      url: '../modifyGoods/modifyGoods',
    })
  },
  getList(data){
    let url = "http://localhost:8080/vem-operator/machineController/getMachineChannelByVmId";

    ajax.ajaxRequest(url, 'get', data, ' ', (response) => {
     
      this.setData({
        goods: response.data
      })
    })
  },
  onLoad(options){
    console.log(`options`, options)
    let data = {
      mId: options.title
    }
    // this.getList(data);
  }
})
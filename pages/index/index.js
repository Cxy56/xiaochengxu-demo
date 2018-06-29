var app = getApp()
var util = require('../../utils/util.js')
var ajax = require('../../utils/ajax.js')
let currentTime = util.formatDateTime();
let todayDate = currentTime.split(' ')[0].concat(' 00:00:00');
Page({
  data: {
    totalMoney:0,
    offlineNum:0,
    onlineNum:0,
    totalVemStock:0,
    totalVemAlerm:0,
    array:[]

  },
  toTodaySales(){
    wx.navigateTo({
      url: '../order/todaySales/todaySales',
    })
  },
  salesDetail:function(e){
    wx.navigateTo({
      url: '../order/todaySales/todaySales',
    })
  }, 
  onPullDownRefresh:function(){
   
     wx.showToast({
      title: '成功666',
      icon: 'success',
      duration: 2000
    });
  },
  getData:function(){
    // 获取首页展示块数据
    this.getSumData();
    // 获取列表信息
    // this.getVemListWithFinanceAnalysis();
  },
  getVemListWithFinanceAnalysis(){
    let url = 'http://localhost:8080/vem-operator/machineController/getAllMachineListWithFinanceAnalysis';
    let data = {
      startDatetime: todayDate,
      endDatetime: currentTime
    };
    ajax.ajaxRequest(url, 'get', data, ' ', (response) => {
      this.setData({
        array:response.data
      })
    })
  },
  getSumData(){
    
    // let currentTime = util.formatDateTime();
    // let todayDate = currentTime.split(' ')[0].concat(' 00:00:00');

    let url = "http://localhost:8080/vem-operator/order/searchOrderSumByOperatorId";
    let data = {
      startDatetime: todayDate,
      endDatetime: currentTime
    }
    ajax.ajaxRequest(url, 'get', data, ' ', (response) => {
        // 获得总钱数
        let VemResultAll = response.data.map(item => {
          return {
            totalMoney: item.totalMoney,
          }
        });
        let money = 0;
        for (let i = 0; i < VemResultAll.length; i++) {
          money += parseFloat(VemResultAll[i].totalMoney);
        }
       this.setData({
         totalMoney: parseFloat(money).toFixed(2)
       })
    });
  },
  onLoad: function (e) {
    // this.getData();
    this.setData({
      array: [{}, {}, {}, {}, {}, {}]
    });
    // wx.startPullDownRefresh()
  },

})
var app = getApp()
var util = require('../../../utils/util.js')
var ajax = require('../../../utils/ajax.js')

import * as echarts from '../../../ec-canvas/echarts';
let chart = null;

//请求后台的支付类型等参数
function getInitData(){
  let dataArray = [{
    value: 55,
    name: '支付宝'
  }, {
    value: 20,
    name: '微信'
  }, {
    value: 10,
    name: '会员'
  }, {
    value: 20,
    name: '刷卡'
  }];
  return dataArray;
}
// 初始化图标
function initChart(canvas, width, height) {
  let dataArr = getInitData();
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '支付类型分布',
      x: 'left'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)",
      position: ['0', '40%']
    },
    series: [
      {
        name: '支付类型支付',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: dataArr,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

Page({
  data:{
    currentTime:'',
    ec: {
      onInit: initChart
    }
  },
  onLoad(){
    let _this = this
    this.setData({
      currentTime: util.formatDateTime(),
    })
  }

})
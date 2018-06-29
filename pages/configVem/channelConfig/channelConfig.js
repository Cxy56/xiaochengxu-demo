var ajax = require('../../../utils/ajax.js')
Page({
  data:{
    searchInput:'',
    array:[{},{}],
    noResult:false
  },
  listenerSearchInput(e){
    console.log(`e`,e.detail.value);
    this.setData({
      searchInput: e.detail.value
    })
  },
  //按机器编号搜索
  toSearch(){
    console.log(this.data.searchInput);
    let data = {
      mId: this.data.searchInput
    }
    this.getData(data);
  },
  changeGoods(e){
    console.log(e.detail)
    let data = "1111111"
    wx.navigateTo({
      url: "changeGoods/changeGoods?title=" + data + "&source_url=" + data,
    })
  },
  getData(data){
    let url = "http://localhost:8080/vem-operator/machineController/getAllMachineButLatticeList";
     
    ajax.ajaxRequest(url, 'get', data, ' ', (response) => {
      if (response.data.length == 0) {
        this.noResult = true;
        return;
      }
      this.setData({
        array: response.data
      })
    })
  },
  onLoad(){
    console.log(`加载请求数据`);
    let data = {};
    // this.getData(data);
  }
})
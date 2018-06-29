Page({
  data:{
    array: ['美国', '中国', '巴西', '日本'],
    selGoods: '请选择',
    name:"chen"
  },
  bindPickerGoodsChange(e){
    this.setData({
      selGoods: this.data.array[e.detail.value]
    })
  },
  bindSave(){},
  onLoad(){
    this.setData({
      selGoods: this.data.array[0]
    })
  }
})
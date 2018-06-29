function ajaxRequest(requestUrl, requestType, requestData, dataType,fn,errFn){

  //post form
  let formParamsType;
  if (requestType == 'post' && dataType == 'formParams'){
    formParamsType = 'application/x-www-form-urlencoded'  
  }
    else{
    formParamsType = 'application/json'
  }
   
   let sendHeader;
  //本地取存储的sessionID
  let  session_id  =  wx.getStorageSync('userSESSID');
  console.log(typeof session_id);
  if ( session_id != " " && session_id != null){
    console.log(`非空`);
    console.log(session_id)
    // 设置请求头header的cookie
    sendHeader = {
      'content-type': formParamsType,
      'Cookie': 'SESSION=' + session_id
    }  
  }
  else{
    console.log(`空sdw`);
    sendHeader = {
      'content-type': formParamsType
    }
  }
  wx.request({
    url: requestUrl,
    data: requestData,
    method: requestType,
    header: sendHeader,
    success:function(response){
      console.log(`response.header`);
      console.log(response.header);
      if (response.header.authCode == 11){
          wx.navigateTo({
            url: '/pages/user/login/login',
          })
          return;
        }
      fn(response.data);
    },
    fail: function (response) {
      if (errFn){
        errFn(response.data);
      }
      else{
        wx.showToast({
          title:  '失败',
          icon: 'none',
          duration: 2000
        })
      }    
    }
  })
}

module.exports = {
  ajaxRequest: ajaxRequest
}


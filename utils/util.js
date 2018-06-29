function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//获取日期
function formatDateTime(yesterdayDate){
    var date;
    var nowDate = new Date();
    if (yesterdayDate) {
      const yesterday = new Date(nowDate - 3600 * 1000 * 24);
      var year1 = yesterday.getFullYear();
      var month1 = yesterday.getMonth() + 1;
      var today1 = yesterday.getDate();

      if (month1 >= 1 && month1 <= 9) {
        month1 = "0" + month1;
      }
      if (today1 >= 1 && today1 <= 9) {
        today1 = "0" + today1;
      }
      date = year1 + "-" + month1 + "-" + today1 + " 00:00:00";
    }
    else {
      var year = nowDate.getFullYear();
      var month = nowDate.getMonth() + 1;
      var today = nowDate.getDate();
      let hours = nowDate.getHours();
      let minutes = nowDate.getMinutes();
      let seconds = nowDate.getSeconds();

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (today >= 1 && today <= 9) {
        today = "0" + today;
      }
      if (hours >= 0 && hours <= 9) {
        hours = "0" + hours;
      }
      if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
      }
      if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
      }

      date = year + "-" + month + "-" + today + " " + hours + ":" + minutes + ":" + seconds;
    }
    return date;
}

module.exports = {
  formatTime: formatTime,
  formatDateTime: formatDateTime
}

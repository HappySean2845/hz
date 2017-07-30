/**
 * Created by Darre on 17/07/2017.
   */
  //公用popup方法   popup用来制定popupcontainer中指定的某个popup   popkeypopu的id
var popupShow = function (popkey,speed){
  if(typeof(speed) != "number") speed = 0;
  $("#popup_container .popup").hide();
  $("#popup_container").fadeIn(speed).find("#"+popkey).show();
},popupHide = function (speed){
  if(typeof(speed) != "number") speed = 0;
  $("#popup_container .popup").hide();
  $("#popup_container").fadeOut(speed);
},animation = ["left","right","top",'bottom'];
//光点随机选中一个为正确光点
function randomLight(jqObj){
  var index = parseInt(Math.random()*jqObj.length);
  jqObj.attr("correct",'0');
  jqObj.eq(index).attr("correct",'1');
}
//获取url参数
function GetRequest() {
  var url = location.search;
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for(var i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
//在每个页面通过url中参数，确定已经集齐的字
function initKeyNum(jqObj){
  var urlObj = GetRequest();
  jqObj.eq(0).find('i').html(urlObj.xiang=='1'?'1':'0');
  jqObj.eq(1).find('i').html(urlObj.zhufir=='1'?'1':'0');
  jqObj.eq(2).find('i').html(urlObj.jiu=='1'?'1':'0');
  jqObj.eq(3).find('i').html(urlObj.zhusec=='1'?'1':'0');
}
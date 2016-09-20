var win_height; //浏览器当前窗口可视区域高度
var win_width; //浏览器当前窗口可视区域宽度
var original_width = 2100; //图片原始尺寸，编辑可手填
var original_height = 1000; //图片原始尺寸，编辑可手填

var pic_width, pic_height, pic_left ,pic_top; //裁剪适配后的图片显示尺寸和左边距、上边距

OnePicAction();

function OnePicAction(){
  win_height = $(window).height(); //浏览器当前窗口可视区域高度
  win_width = $(window).width(); //浏览器当前窗口可视区域宽度

  //裁剪图片
  if(Math.ceil(win_height * original_width / original_height) < win_width ){
      pic_width = win_width ;
      pic_height = Math.ceil(win_width * original_height / original_width);
      pic_left = 0;
      pic_top = - Math.ceil((pic_height - win_height) / 2);
  }else{
      pic_height = win_height;
      pic_width = Math.ceil(win_height * original_width / original_height);
      pic_left = - Math.ceil((pic_width - win_width) / 2);
      pic_top = 0;
  }
  $(".bgimg-wrap img").css("width",pic_width+"px").css("height",pic_height+"px").css("margin-top",pic_top+"px").css("margin-left",pic_left+"px");
}
//浏览器大小变化时壹图处理
window.onresize = function(){
  OnePicAction();
}

function OnePicAction(){win_height=$(window).height(),win_width=$(window).width(),Math.ceil(win_height*original_width/original_height)<win_width?(pic_width=win_width,pic_height=Math.ceil(win_width*original_height/original_width),pic_left=0,pic_top=-Math.ceil((pic_height-win_height)/2)):(pic_height=win_height,pic_width=Math.ceil(win_height*original_width/original_height),pic_left=-Math.ceil((pic_width-win_width)/2),pic_top=0),$(".bgimg-wrap img").css("width",pic_width+"px").css("height",pic_height+"px").css("margin-top",pic_top+"px").css("margin-left",pic_left+"px")}var win_height,win_width,original_width=2100,original_height=1e3,pic_width,pic_height,pic_left,pic_top;OnePicAction(),window.onresize=function(){OnePicAction()};
window.onload=function(){function e(){for(var e=0;e<m.length;e++)"js-imgDisplay"==m[e].className&&(m[e].className="");m[a-1].className="js-imgDisplay",a+=1,a>4&&(a=1)}function t(){n=setInterval(function(){e()},3e3)}var n,m=(document.getElementById("content"),document.getElementById("bgimg-list"),document.getElementById("bgimg-list").getElementsByTagName("img")),a=1;t()};
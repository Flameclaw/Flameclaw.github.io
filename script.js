var v=document.getElementById("videoplayback.mp4");
var c=document.getElementById("myCanvas");
var ctx=c.getContext('2d');
var i;
v.addEventListener('play',function() {i=window.setInterval(function() {ctx.drawImage(v,5,5,260,125)},20);},false);
v.addEventListener('pause',function() {window.clearInterval(i);},false);
v.addEventListener('ended',function() {clearInterval(i);},false);
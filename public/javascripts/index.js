window.onload = function () {
  var containerImg = document.getElementById('carousel');
  var navigationBar = document.getElementById('navigation_bar').getElementsByTagName('i')
  // 参数 img父容器，底部导航条，轮播时间，切换间距
   var carousel = function (imgBox, navigationBar,time,moveDistance) {
        var len = navigationBar.length;
        var animated = false;
        var index = 1;
        function animate (offset,moveDistance) {
          animated = true;
          var speed = offset/(moveDistance);
          var left = parseInt(imgBox.style.left) + offset;
          var go = function (){
              if (speed <= 0 && parseInt(imgBox.style.left) > left) {
                  imgBox.style.left = parseInt(imgBox.style.left) + speed + 'px';
                  setTimeout(go, 10);
              }
              else {
                  imgBox.style.left = left + 'px';
                  if(left <= (-960*len)){
                    imgBox.style.left = 0;
                  } 
                animated = false;
              }
          }
          go();
      }
      function navigation(navigationBar) {
         for(var i=0; i<navigationBar.length; i++) {
            navigationBar[i].className= '';
          }
          navigationBar[index].className = 'active';
          if(index == 2 || index == 3) {
             document.getElementById('title').style.display = 'none';
          }else{
            document.getElementById('title').style.display = 'block';
          }
          
          index ++;
          if(index == 4) {
            index = 0;
          }
      }
      setInterval(function () {
        if (animated) {
            return;
        }
        animate(-960,moveDistance);
        navigation(navigationBar);
      }, time);
   }
  carousel(containerImg, navigationBar,3500,40);
}
var $getPwd = (function(){
    var html=$(`<div id="box">
                  <input type="password" id='pwd'>
                  <i id='icon class="iconfont icon-Eyevision"'></i>
                </div>`);
    function show(password){
      $(password).append(html);
      var $icon = $(password+' #icon'),
          $pwd = $(password+' #pwd');
      $icon.mouseover(function(){
        $icon.attr("class","iconfont icon-Eyeblind1");
        $pwd.attr("type","text");
      })
      $icon.mouseout(function(){
        $icon.attr("class","iconfont icon-Eyevision");
        $pwd.attr("type","password");
      })
    }
    function getPwd(password){
      var $pwd = $(password+' #pwd');
      alert($pwd.val());
    }
    return{
      show:show,
      getPwd:getPwd
    }
  })();
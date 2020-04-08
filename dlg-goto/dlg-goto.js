var $dlgGoto=(function(){
    var html=''
    +'<div class="notepad-dlg-goto">'
        +'<div class="dialogbox">'
            +'<div class="titlebar">'
                +'<p class="title">转到指定行</p>'
                +'<span class="close-btn">x</span>'
            +'</div>'
            +'<div class="main">'
                +'<label for="">行号(L):</label>'
                +'<br>'
                +'<input class="txt-line-num" type="text" autofocus>'
                +'<br>'
                +'<input class="btn-goto" type="button" value="转到">'
                +'<input class="btn-cancel" type="button" value="取消">'
            +'</div>'
        +'</div>'
    +'</div>'
    var $dlg=$(html),
        cfg={
            container:'body',
            num:6,
            title:'同意',
            onClick:null
        };

    function show(conf){
        //1、DOM draw绘制DOM
        $(cfg.container).append($dlg);
        $.extend(cfg,conf);
        num=cfg.num;

        //2、event bind事件绑定
        $dlg.click(cfg.onClick);
    }

    return {
        show:show
    };
}());

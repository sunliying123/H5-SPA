function TimerButton(){
    var $btn=$("<input class='timer-button' type='button' disabled>"),
        
        num=6,
        cfg={
            container:'body',
            num:6,
            title:'同意',
            onClick:null
        },
        timer=0;
    
    //function show(conf){
    this.show=function(conf){
        //1、DOM draw绘制DOM
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        num=cfg.num;

        $btn.val(cfg.title+'('+cfg.num+'s)');

        timer=setInterval(function(){
            cfg.num--;
            if(cfg.num === 0){
                clearInterval(timer);
                $btn.val(cfg.title);
                $btn.removeAttr('disabled');
            }else{
                $btn.val(cfg.title+'('+cfg.num+'s)');
            }
        },1000);
        //2、event bind事件绑定
        $btn.click(cfg.onClick);
    }
};
//不用page load event
/*
封装成对象，有几种方法
1、简单对象字面量，不完全是面向对象，不能包括私有方法
var timer{
   show:function()
}
2、工厂函数，一个函数返回值是一个简单对象
var timerBtn=(function(){
    return{
        show:function(){}
    }
}())
3、构造函数
function TimerBtn(){
}
var tb=new TimeBtn();
*/


var $timerButton=(function(){

    //将CSS样式写进JS文件的一种方式
    // $btn.css({
    //     height:'50px',
    //     width:'100px'
    // });
    
    function show(conf){
        var $btn=$("<input class='timer-button' type='button' disabled>"),
        
        num=6,
        cfg={
            container:'body',
            num:6,
            title:'同意',
            onClick:null
        },
        timer=0;

        //1、DOM draw绘制DOM
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        num=cfg.num;

        $btn.val(cfg.title+'('+cfg.num+'s)');

        timer=setInterval(function(){
            cfg.num--;
            if(cfg.num === 0){
                clearInterval(timer);
                $btn.val(cfg.title);
                $btn.removeAttr('disabled');
            }else{
                $btn.val(cfg.title+'('+cfg.num+'s)');
            }
        },1000);
        //2、event bind事件绑定
        $btn.click(cfg.onClick);
    }

    return {
        show:show
    };
}());

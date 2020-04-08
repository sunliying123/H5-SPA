$(function(){
    //get dom elem
    var $width = $("#width"),
        $height = $("#height"),
        // $btnCal = $("#calculate"),
        $perimeter = $("#perimeter"),
        $form=$('form'),
        $area = $("#area");
    /**calc button click event */
    $form.submit(function(){
        e.preventDefault();

        //get value
        var w=Number($width.val()),
            h=Number($height.val());
        //calculate
        var p=2*(w+h),
            a=w*h;
        //浮点运算
        function roundFractional(x,n){
            return Math.round(x*Math.pow(10,n))/Math.pow(10,n);
        }
        //关于周长
        var s1=String(p).indexOf(".")+1;//获取周长数值小数点的位置
        var n1=String(p).length-s1;//获取周长数值小数点后的个数
        var p1=roundFractional(p,n1);

        //关于面积
        var s2=String(a).indexOf(".")+1;//获取面积数值小数点的位置
        var n2=String(a).length-s2;//获取面积数值小数点后的个数
        var a1=roundFractional(a,n2);
        //output
        $perimeter.val(p1);
        $area.val(a1);
    });    
});

$(function(){
    //get dom elem
    var $width = $("#width"),
        $height = $("#height"),
        $btnCal = $("#calculate"),
        $perimeter = $("#perimeter"),
        $area = $("#area");

    /**calc button click event */
    $btnCal.click(function(){
        //validate if error return
        if(!validate('$width') || !validate('$height')) {
            return;
        }


        //get value
        var w=Number($width.val()),
            h=Number($height.val());


        //calculate
        var p=2*(w+h),
            a=w*h;


        //output
        $perimeter.val(p);
        $area.val(a);
    });   
    
    //1.event keypress
    //2.event argument get key value, e.key and e.target.value
    //3.ilegel key filter, e.preventDefault()
    //4.合法字符还要考虑出现的位置，例如：. , e E
    $width.keypress(function(e){
        var pos=e.target.selectionStart,
            con=e.target.value;

        if(/[abcdf-zABCDF-Z~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
            e.preventDefault();
            return;
        }
        //合法字符 e，代表'次方'
        //允许出现在非科学计数法的数字中间
        //允许出现在非科学计数法的数字后面

        //不允许出现在非科学计数法的数字前面
        //不允许出现在空文本中
        //不允许出现在负号后面
        //不允许出现在科学计数法(e E)数字的前面、中间、末尾

        
        if(e.key === 'e'){
            if(pos === 0 || con.indexOf('e') !== -1 || con.indexOf('E') !== -1){
                e.preventDefault();
                return;
            }
            if(pos === 1 && con.substring(0,1) === '-'){
                e.preventDefault();
                return;
            }
        }

        //合法字符E
        
        //合法字符.

        //合法字符-
    });

    $height.keypress(function(e){
        if(/[abcdf-zABCDF-Z~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
            e.preventDefault();
            return;
        }
    });

    $width.focusout(function(){
        if(!validate('#$width')) $width.select();
    });

    $height.focusout(function(){
        if(!validate('#$height')) $height.select();
    });

    function validate(field){
        // get DOM error message
        var $data=$(field),
            $msg=$(field + '-validation-message');

        //validate null
        if($data.val() === ''){
            $msg.html('不能为空！');
            $data.select();
            return false;
        }

        //validate number
        var reg=/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/;
        if(!reg.test($data.val())){
            $msg.html('必须是数值！');
            $data.select();
            return false;
        }

        //validate>0
        if(Number($data.val())<0){
            $msg.html('必须大于零！');
            $data.select();
            return false;
        }
        

        $msg.html('');
        return true;
    }
});

$(function(){
    //表格
    var data=[
        {field:'login_name',explain:'登录名',data:'C(9)',null:'N',main:'Y',remark:''},
        {field:'password',explain:'密码',data:'C(9)',null:'N',main:'N',remark:''},
        {field:'Chinese_name',explain:'中文名',data:'C(10)',null:'N',main:'N',remark:''},
        {field:'English_name',explain:'英文名',data:'C(10)',null:'Y',main:'N',remark:''},
        {field:'gender',explain:'性别',data:'C(1)',null:'Y',main:'N',remark:''},
        {field:'address',explain:'家庭住址',data:'C(100)',null:'Y',main:'N',remark:''},
        {field:'mobile',explain:'联系电话',data:'C(15)',null:'Y',main:'N',remark:''},
        {field:'comment',explain:'备注',data:'C(100)',null:'Y',main:'N',remark:''}
    ];

    var excel=new Handsontable(document.getElementById('excel'),{
        data:data,
        colHeaders:['字段','说明','数据类型','允许为空','主键','备注'],//自定义列头
        colWidths:130,//设置所有列宽
        rowHeights:30,//设置所有行高
        filters:true,
        columnSorting:true,//列排序
        autoColumnSize:true,//自动列大小
        undo:true,
        redo:true,
        wordWrap:true,
        allowInsertRow:true,
        allowInsertColumn:false,
        licenseKey: "4d522-5237a-55f42-6653a-d1494"
    });

});
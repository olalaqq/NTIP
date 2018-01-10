function selected(obj){
    $(obj).toggleClass('active');
}
function loadXMLDoc() {
    $.ajax({
        type:"post",
        url:"bootstrap-3.3.7-dist/js/item.json",
        dataType:'json',
        success:function (result) {
            addBox(result)
        }
    });
    var options = {
        currentPage: 4,
        totalPages: 10,
        numberOfPages:5,
        itemTexts: function(type, page, current) { //修改显示文字
            switch (type) {
                case "first":
                    return "第一页";
                case "prev":
                    return "上一页";
                case "next":
                    return "下一页";
                case "last":
                    return "最后一页";
                case "page":
                    return page;
            }
        }
    };
    $('#page-pgone').bootstrapPaginator(options);
}
function addBox(per) {
    var tbody = $('#tbMain');
    for(var i = 0;i < per.length; i++){ //遍历一下json数据
        var trow = getDataRow(per[i]); //定义一个方法,返回tr数据
        tbody.append(trow);
    }
}
function getDataRow(h){
    var row = document.createElement('tr'); //创建行
    var idCell = document.createElement('td'); //创建第一列id
    idCell.innerHTML = h.id; //填充数据
    row.append(idCell); //加入行  ，下面类似
    var nameCell = document.createElement('td');//创建第二列name
    nameCell.innerHTML = h.shebeilei;
    row.appendChild(nameCell);
    var delCell = document.createElement('td');//创建第四列，操作列
    row.appendChild(delCell);
    var btnDel = document.createElement('input'); //创建一个input控件
    btnDel.setAttribute('type',''); //type="button"
    btnDel.setAttribute('value','详情');
    return row; //返回tr数据
}
function getArray(){
    var array={};

}

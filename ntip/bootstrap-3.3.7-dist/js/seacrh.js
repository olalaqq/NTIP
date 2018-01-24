function selected(obj){
    $(obj).toggleClass('active');
}
function isdeviceIp(ipAdress){
    var parden="^(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|[1-9])\\."
        +"(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\."
        +"(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\."
        +"(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)$";
    return  parden.test(ipAdress)
}

function loadXMLDoc() {
    var Orgname=[];
    $("#areaName").children(".active").each(function(){
        Orgname.push($(this).text());
    });
    alert(Orgname);
    var Catname=[];
    $("#catName").children(".active").each(function(){
        Catname.push($(this).text());
    });
    alert(Catname);
    var alarmTime=$("#datetimepicker").val();
    alert(alarmTime);

    var serviceIp=$("#serviceIp").val();
    alert(serviceIp);
    var status;
    $.ajax({
        type:"post",
        url:"bootstrap-3.3.7-dist/js/item.json",
        data:"hi",
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
    tbody.empty();
    for(var i = 0;i < per.length; i++){ //遍历一下json数据
        var trow = getDataRow(per[i]); //定义一个方法,返回tr数据
        tbody.append(trow);
    }
}
function getDataRow(h){
    var row = document.createElement('tr'); //创建行

    var idCell = document.createElement('td'); //创建第一列序号
    idCell.innerHTML = h.id; //填充数据
    row.append(idCell); //加入行  ，下面类似

    var catName = document.createElement('td');//创建第二列设备类型catname
    catName.innerHTML = h.catname;
    row.appendChild(catName);

    var orgname = document.createElement('td');//创建第三列地市公司org_name
    orgname.innerHTML = h.org_name;
    row.appendChild(catName);

    var roomName = document.createElement('td');//创建第四列所在机房roomName
    roomName.innerHTML = h.roomName;
    row.appendChild(roomName);

    var deviceName = document.createElement('td');//创建第五列设备名称deviceName
    deviceName.innerHTML = h.deviceName;
    row.appendChild(deviceName);

    var lasttime = document.createElement('td');//创建第6列最后通讯时间lasttime
    lasttime.innerHTML = h.lasttime;
    row.appendChild(lasttime);

    var alarmLevel = document.createElement('td');//创建第7列告警等级alarmLevel
    alarmLevel.innerHTML = h.alarmLevel;
    row.appendChild(alarmLevel);

    var alarmLevel = document.createElement('td');//创建第8列告警等级alarmLevel
    alarmLevel.innerHTML = h.alarmLevel;
    row.appendChild(alarmLevel);

    var typename = document.createElement('td');//创建第9列设备型号typename
    typename.innerHTML = h.typename;
    row.appendChild(typename);

    var serviceIp = document.createElement('td');//创建第10列设备IP serviceIp
    serviceIp.innerHTML = h.serviceIp;
    row.appendChild(serviceIp);

    var state = document.createElement('td');//创建第11列运行状态
    state.innerHTML = h.state;
    row.appendChild(state);

    var detail = document.createElement('td');//创建详情列
    var detailBtn = document.createElement('a'); //创建一个input控件
    detailBtn.innerHTML="详情"
    detail.appendChild(detailBtn);
    row.appendChild(detail);

    return row; //返回tr数据
}

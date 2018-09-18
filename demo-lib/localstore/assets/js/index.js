function keepclear() {
    $(".tbody tr").remove();
    $("#page-dev").remove();
    $(".tablelist").addClass("nonedata");
    $(".modle").removeClass("show");
    $(".alertall").removeClass("show");
    $(".alertchose").removeClass("show");
}

function out() {
    $(".modle").removeClass("show");
    $(".alertall").removeClass("show");
    $(".alertchose").removeClass("show");
}

function alert() {
    $(".alertall").addClass("show");
    $(".modle").addClass("show");
}

function alert2() {
    $(".alertchose").addClass("show");
    $(".modle").addClass("show");
}

// 上面是我前面学静态的时候写的     当时用的JQ  今天的项目没有使用 全部是原生JS

// 8-31 BEGIN



    var tbody = document.getElementsByClassName("tbody")[0];
    console.log(tbody);
    var persons = JSON.parse(localStorage.getItem("persons"));
    var len = persons.length;
    var n = 0;
    var prv = document.getElementsByClassName("prv")[0];
    var next = document.getElementsByClassName("next")[0];

    console.log(len);

    // 分页
    // function pagenav(){
    //     if( len-n > 10 ){
    //         len=10;
    //         next.className = 'next';
    //     }
    // }
    // function next1(){
    //     n+=10;
    //     len = persons.length;
    //     pagenav();
    // }
    // function prv1(){
    //     n-=10;
    //     len-=10;
    // }
    // next.onclick=next1();
    // prv.onclick=prv1()
    // pagenav();



    if (persons.length) {
        document.getElementsByClassName("tablelist")[0].style.background = "#ffffff";
        document.getElementsByClassName("nodata")[0].style.display = "none";
    }
    
    var tabledata = '';
    for(var i = n; i <len ; i++){
        tabledata += "<tr><td><input type=\"checkbox\" id=\"" + i + "\"/><label for=\"" + i + "\"></label></td><td>" + persons[i].name + "</td><td>" +persons[i].tel + "</td><td>" + persons[i].agent + "</td><td>" + persons[i].time + "</td><td>" + persons[i].state + "</td><td>" + persons[i].Account + "</td><td><a href=\"#\" class=\"link edit\">编辑</a><a href=\"#\" class=\"link removethis\">删除</a></td></tr>";
    }
    

    tbody.innerHTML = tabledata;


    var Ebtn=document.getElementsByClassName('edit');
	var btn=document.getElementsByClassName('removethis');
	for(var i=0;i<btn.length;i++){
		(function(val){
			btn[i].onclick=function(){    
                for (var i = 0; i < len; i++) {
                    if (i == val) {  
                        persons.splice(i, 1);
                    }
                }
                localStorage.setItem('persons', JSON.stringify(persons));
                this.parentNode.parentNode.remove();
                if (persons.length > 0) {
                    document.getElementsByClassName("tablelist")[0].style.background = "#ffffff";
                    document.getElementsByClassName("nodata")[0].style.display = "none";
                }else{
                    document.getElementsByClassName("tablelist")[0].style.background = "url(../../assets/img/noData.png) no-repeat center center";
                    document.getElementsByClassName("tablelist")[0].style.backgroundcolor = "#ffffff";
                    document.getElementsByClassName("nodata")[0].style.display = "block";
                }
			}
		})(i);
    }
    
    for(var i=0;i<Ebtn.length;i++){
		(function(val){
			Ebtn[i].onclick=function(){    
                window.location = "../newmember/member.html?type=edit&num="+val;
			}
		})(i);
	}



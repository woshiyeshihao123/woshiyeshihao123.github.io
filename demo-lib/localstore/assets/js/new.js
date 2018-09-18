var warning = document.getElementById("warning");
var data = document.getElementsByClassName("cont");
var person;
var persons = JSON.parse(localStorage.getItem("persons"));



function save() {
    person = {
    "name": data[0].value,
    "tel": data[1].value,
    "agent": data[2].value,
    "time": data[3].value,
    "state": data[4].value,
    "Account": data[5].value
  };
  for (var i in person) {
    if (person[i] == "") {
      warning.style.display = "block";
      return false;
    }
  }
  if(type == 'edit'){
    editperson();
  } else{
    addperson();
  }
}
 
 function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
  var r = window.location.search.substr(1).match(reg); 
  if (r != null) return unescape(r[2]); 
  return null; 
 }
 
  var type = getQueryString('type'); 
  console.log(type);
  var num = getQueryString('num'); 
  console.log(num);

  if(type == 'edit'){
    data[0].value = persons[num].name;
    data[1].value = persons[num].tel;
    data[2].value = persons[num].agent;
    data[3].value = persons[num].time;
    data[4].value = persons[num].state;
    data[5].value = persons[num].Account;
  }


// 编辑员工信息
function editperson() {

  if(!person) {
      return;
  }
  // 存储数据
  persons[num] = person;
  localStorage.setItem('persons', JSON.stringify(persons));
  window.location = '../index/index.html';
}

// 添加员工信息
function addperson() {
  // 存储数据
  var persons = localStorage.getItem('persons') || "[]";
  persons = JSON.parse(persons);
  persons.push(person);
  localStorage.setItem('persons', JSON.stringify(persons));
  window.location = '../index/index.html';
}

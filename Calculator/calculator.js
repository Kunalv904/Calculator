var starting= true;
var fullStr;
var operatorIndex;
var num1;
var num2;
var neagtive = false;
var tempStr;

$(document).keypress(function(event){
  if (event.key=="Enter") {
    showResult();
  }
  else if (event.key=="C" || event.key=="c") {
    clearDisplay();
  }
  else if (event.keyCode==8) {
    removeLastTerm();
  }
  else if ((event.keyCode>=97 && event.keyCode<=122)||(event.keyCode>=65 && event.keyCode<=90)) {

  }
  else{
    takingInput(event.key);
  }
  animation(event.key);
});

$(document).keyup(function(e){
  if (e.keyCode==8) {
    removeLastTerm();
    animation($("h4").text());
  }
});

$(".number").click(function(){
  var inp= $(this).text();
  if (inp=="=") {
    showResult();
  }
  else if (inp=="C") {
    clearDisplay();
  }
  else if(inp=="Bac"){
    removeLastTerm();
  }
  else {
    takingInput(inp);
  }
});

function takingInput(item){
  if(starting){
    document.querySelector(".display").innerHTML = item;
    starting = false;
  }
  else{
    document.querySelector(".display").innerHTML += item;
  }
}

function showResult(){
  fullStr = $(".display").text();
  if (fullStr[0]=="-") {
    neagtive = true;
    fullStr = fullStr.slice(1,fullStr.length);
  }

  if(fullStr.includes("+")){
    operatorIndex = fullStr.indexOf("+");
    num1 = fullStr.slice(0,operatorIndex);
    num2 = fullStr.slice(operatorIndex+1,fullStr.length);
    if (neagtive) {
      $(".display").text((-1)*Number(num1)+Number(num2));
    } else {
      $(".display").text(Number(num1)+Number(num2));
    }
  }
  else if (fullStr.includes("-")) {
    operatorIndex = fullStr.indexOf("-");
    num1 = fullStr.slice(0,operatorIndex);
    num2 = fullStr.slice(operatorIndex+1,fullStr.length);
    if (neagtive) {
      $(".display").text((-1)*Number(num1)-Number(num2));
    } else {
      $(".display").text(Number(num1)-Number(num2));
    }
  }
  else if (fullStr.includes("*")) {
    operatorIndex = fullStr.indexOf("*");
    num1 = fullStr.slice(0,operatorIndex);
    num2 = fullStr.slice(operatorIndex+1,fullStr.length);
    if (neagtive) {
      $(".display").text((-1)*Number(num1)*Number(num2));
    } else {
      $(".display").text(Number(num1)*Number(num2));
    }
  }
  else if (fullStr.includes("/")) {
    operatorIndex = fullStr.indexOf("/");
    num1 = fullStr.slice(0,operatorIndex);
    num2 = fullStr.slice(operatorIndex+1,fullStr.length);
    if (neagtive) {
      $(".display").text((-1)*Number(num1)/Number(num2));
    } else {
      $(".display").text(Number(num1)/Number(num2));
    }
  }

  if($(".display").text()==0){
    starting = true;
  }
}

function clearDisplay(){
  $(".display").text(0);
  starting = true;
}

function removeLastTerm(){
  if ($(".display").text()!=0 || $(".display").text()!="0") {
    var tempStr = $(".display").text();
    if (tempStr.length==1) {
      $(".display").text(0);
      starting = true;
    }
    else{
      tempStr = tempStr.slice(0,tempStr.length-1);
      $(".display").text(tempStr);
    }
  }
}

function animation(num){
  if (num == "+") {
    num = "plus";
  }
  else if(num == "*") {
    num = "multiply";
  }
  else if(num == "/") {
    num = "divide";
  }
  else if(num == ".") {
    num = "dot";
  }
  else if(num == "Enter") {
    num = "equal";
  }

  $(".n"+num).addClass("pressed");
  setTimeout(function(){
    $(".number").removeClass("pressed");
  },100);
}

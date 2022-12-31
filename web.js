var date = new Date();
var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()
var time = document.getElementById("time");

setInterval(function(){
    document.title = "SILVESTR 2022 | "+hours+":"+minutes;
    time.innerHTML = hours+":"+minutes+":"+seconds;
}, 1);
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("timer").innerHTML = t;
  document.getElementById("data").innerHTML = d.getDate() + "/"+ d.getMonth()+ "/"+ d.getFullYear();
}
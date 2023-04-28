console.log("success");

e = document.getElementById('foo');
e.innerHTML = "Updated by client.js";

start = document.getElementById('btnStart');
stop = document.getElementById('btnStop');

var keep = null;
var ticker = 0;

start.innerHTML = "Start";
stop.innerHTML = "Stop";

start.onclick = () => {keep = setInterval(() => {ticker = ticker+1; console.log(ticker);}, 100)}; 
stop.onclick = () => {clearInterval(keep);};


console.log("success");

// Testing getElementById
e = document.getElementById('foo');
e.innerHTML = "Updated by client.js";

// Find the buttons
start = document.getElementById('btnStart');
stop = document.getElementById('btnStop');


// Begin button Functionality
var keep = null;
var ticker = 0;

//// Give the buttons text programatically
start.innerHTML = "Start";
stop.innerHTML = "Stop";

//// Assign the onclick functionality after the script has had a chance to load.
start.onclick = () => {if(keep === null) { keep = setInterval(() => {ticker = ticker+1; console.log(ticker); e.innerHTML = ticker;}, 100)};}; 
stop.onclick = () => {clearInterval(keep); keep = null;};


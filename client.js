console.log("success");

// Testing getElementById
e = document.getElementById('foo');
e.innerHTML = "Updated by client.js";

// Find the buttons
start = document.getElementById('btnStart');
stop = document.getElementById('btnStop');
send = document.getElementById('btnSend');

// Begin button Functionality
var keep = null;
var ticker = 0;

//// Give the buttons text programatically
start.innerHTML = "Start";
stop.innerHTML = "Stop";
send.innerHTML = "Send";

//// Assign the onclick functionality after the script has had a chance to load.
start.onclick = () => {if(keep === null) { keep = setInterval(() => {ticker = ticker+1; console.log(ticker); e.innerHTML = ticker;}, 100)};}; 
stop.onclick = () => {clearInterval(keep); keep = null;};

send.onclick = async () => {fetch("/secret")};

async function getMessage() {
	const response = await fetch("/messages");
	const jsonData = await response.json();
	console.log(jsonData);
	if (jsonData['secretTrigger']) {
		console.log("SURPRISE!")
		const d = document.getElementById("secret");
		d.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/4bMOTTJqGgM?start=64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
	} 
};

setInterval(getMessage, 1000);


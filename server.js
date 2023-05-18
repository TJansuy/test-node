'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

// GET requests
app.get('/', (req, res) => {
	console.log(req);
	res.send("hello world");
});

var secret = false;

app.get('/messages', (req, res) => {
	console.log("Messages checked " + secret + ": " + req);
	res.json({secretTrigger: secret});
	secret = false;
});

// POST requests
app.post('/user/:action/:target', (req, res) => {
	console.log("user");
	console.log(req.params);
	res.send(req.params);
});

app.post('/secret', (req, res) => {
	console.log("Secret Triggered");
	secret = true;
	res.send("Secret Triggered!");
});

app.use(express.static('/usr/src/app'));

app.listen(PORT, HOST, () => {
	console.log('Running...')
});

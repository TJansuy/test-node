'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
	console.log(req);
	res.send("hello world");
}
);

app.post('/user/:action/:target', (req, res) => {
	console.log("user");
	console.log(req.params);
	res.send("Response received");
});

app.listen(PORT, HOST, () => {
	console.log('Running...')
});

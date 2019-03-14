//This is a bare bones server to listen for POSTs & GETs to a certain port number.
//Note: Run "npm install" and "npm install --save body-parser" before use.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	var currentDateTime = new Date(Date.now()).toLocaleString();
	console.log('GET received at: ' + currentDateTime);
	console.log('req.headers == ', req.headers);
	console.log('req.body == ', req.body);
	res.send('GET received!')
})

app.post('/', (req, res) => {
	var currentDateTime = new Date(Date.now()).toLocaleString();
	console.log('POST received at: ' + currentDateTime);
	console.log('req.headers == ', req.headers);
	console.log('req.body == ', req.body);
	res.send('POST received!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
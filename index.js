/************************************************************************************************
* Name: Simple REST Test Server
* Author: Matt Nutsch
* Date: 3-14-2019
* Description: This is a bare bones server to listen for POSTs & GETs at a certain port number.
* Run "npm install" from the command line before use. 
* Run "node index.js" to start the server.
* Send REST messages to your server at port 3000 (usually http://localhost:3000).
*
************************************************************************************************/

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

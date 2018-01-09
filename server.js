const http = require('http');
const express = require('express');
const requestPromise = require('request-promise');
const bodyParser = require('body-parser');


const app = express();
let httpServer = http.createServer(app);

// Setup Server
app.use(express.static('public'));
httpServer.listen(8080, () => {
	console.log('Http Server Started, port 8080')
});
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
app.get('/', function(req, res) {
	res.sendFile('./public/index.html', {root: __dirname})
});

// Handle Ajax
const apiKey = 'IVt9LM-smJrnfgrs8SBjQB_WuAkNyBnGkwrII_uabelfHnIHG0qeWw6GE0aN2Hk6QLckEx8026HHBXEGr6LvK0_FfYZWlPTu-RBnrBwAUfXnR9UcdpHnDXh7XZ9TWnYx';

const getAutoCompleteContent = (text) => {
	const postData = {
		text: text
	};
	const options = {
		uri: 'https://api.yelp.com/v3/autocomplete',
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${apiKey}`
		},
		qs: postData,
	};

	return requestPromise(options, function(error, response, body) {
		return body
	})
};

const getSearchContent = (requestBody) => {
	const options = {
		uri: 'https://api.yelp.com/v3/businesses/search',
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${apiKey}`
		},
		qs: requestBody,
	};

	return requestPromise(options, function(error, response, body) {
		return body
	})
};

app.post('/ajax/autocomplete', function(req, res) {

	const autoCompleteText = req.body.text;

	getAutoCompleteContent(autoCompleteText)
		.then((data) => {
			res.send({
				code: 200,
				data: JSON.parse(data),
			});
		});
});

app.post('/ajax/search', function(req, res) {

	const requestBody = req.body;

	getSearchContent(requestBody)
		.then((data) => {
			res.send({
				code: 200,
				data: JSON.parse(data)
			});
		});
});



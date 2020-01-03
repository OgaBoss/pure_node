// Dependencies
const http = require('http');
const url = require('url')

const server = http.createServer(function (req, res) {
	// get the url and parse it
	const parsedUrl = url.parse(req.url, true)
	const path = parsedUrl.pathname
	const trimmedPath = path.replace(/^\/+|\/+$/g, '');
	const queryStringObject = parsedUrl.query;
	const method = req.method.toLowerCase()

	res.end('Hello World\n');
	console.log(`request received on path: ${trimmedPath} with ${method} and with these query string parameters ${JSON.stringify(queryStringObject)}`)
});

server.listen(3000, function(){
	console.log("the server is listening on port 3000 now")
})
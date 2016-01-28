var http = require('http');

http.createServer(onRequest_a).listen(8081);
http.createServer(onRequest_b).listen(8082);

console.log("------------------------");
console.log("server listening on 8081");
console.log("server listening on 8082");
console.log("------------------------");

function onRequest_a (req, res) {
	res.write('CALL ON 8081\n');
	res.write('Local Port: ' + req.socket.localPort + '\n');
	res.write('Remote Port: ' + req.socket.remotePort + '\n');
	console.log("call on:" + req.socket.localPort);
	res.end();
}

function onRequest_b (req, res) {
	res.write('CALL ON 8082\n');
	res.write('Local Port: ' + req.socket.localPort + '\n');
	res.write('Remote Port: ' + req.socket.remotePort + '\n');
	console.log("call on:" + req.socket.localPort);
	res.end();
}
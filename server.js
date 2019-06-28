var http = require("http");

http.createServer(function(peticion, respuesta) {
   respuesta.writeHead(200, {'Content-Type': 'text/plain'});
   respuesta.end('Hello nodejs.');
}).listen(8000);

console.log('The aplication is running on port 8000!');

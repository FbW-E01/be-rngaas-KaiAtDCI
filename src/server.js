var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World!</h1>');
  res.write('<h2>Hello Milad, hello Joel!</h2>');
  const number = (Math.random()*10).toFixed(0);
  res.write(`<p>Your random number is: ${number}</p>`);
  res.end();
}).listen(8081);
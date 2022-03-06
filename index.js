const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Qeen Võ thị Hồng Trang say Hello The World!'
  }));
});

server.listen(3000);

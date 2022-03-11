const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Queen Võ thị Hồng Trang say Hello The World! Nguyễn Minh Vương'
  }));
});

server.listen(3000);

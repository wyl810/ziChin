const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.argv[2] || 3000; // 获取命令行参数作为端口号，若未提供则默认为 3000

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url);
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('404 Not Found');
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': getContentType(filePath) });
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    default:
      return 'application/octet-stream';
  }
}
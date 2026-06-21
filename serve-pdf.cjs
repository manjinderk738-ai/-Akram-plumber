const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'output.pdf');

  fs.stat(filePath, (err, stat) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('output.pdf not found');
      return;
    }

    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Length': stat.size,
      // Inline ensures it opens in the browser preview
      'Content-Disposition': 'inline; filename="slides.pdf"'
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`PDF Server running at http://${HOST}:${PORT}/`);
});

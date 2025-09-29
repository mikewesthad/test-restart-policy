const http = require('http');

const crashAfterMs = process.env.CRASH_AFTER_MS || 5000;
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server running. Will crash soon.\n');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`Will crash after ${crashAfterMs}ms`);
});

setTimeout(() => {
  console.error('Forcing crash with exit code 1');
  process.exit(1);
}, crashAfterMs);
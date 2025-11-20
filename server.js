const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(" Hola, este es mi primer servidor Node.js!");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(` Servidor ejecutándose en http://localhost:${PORT}`);
});

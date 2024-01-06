const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  // Obtém o endereço IP da máquina onde o servidor está sendo executado
  const ip = getIPAddress();
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Servidor rodando em http://${ip}:8080\n`);
});

server.listen(8080, () => {
  console.log('Servidor está ouvindo na porta 8080');
});

// Função para obter o endereço IP da máquina
function getIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const key in interfaces) {
    for (const iface of interfaces[key]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1'; // Retorna localhost caso não seja encontrado um IP
}

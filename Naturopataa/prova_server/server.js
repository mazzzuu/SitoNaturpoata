// Importa il modulo HTTP
const http = require('http');

// Porta su cui il server ascolta
const PORT = 3000;

// Crea il server
const server = http.createServer((req, res) => {
  console.log(`Richiesta ricevuta: ${req.method} ${req.url}`);

  // Imposta intestazioni CORS (opzionale)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Gestione preflight CORS
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Risposte a seconda del percorso
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(':)');
  } else if (req.url === '/login' && req.method === 'GET') {
    // LOGIN
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ messaggio: 'Ciao dal server!' }));

  } else if (req.url === '/eventi' && req.method === 'GET') {
    // EVENTI
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ messaggio: 'Ciao dal server!' }));

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Percorso non trovato');
  }
});

// Avvia il server
server.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});


// http://localhost:3000/login/?id=luca&password=pippo
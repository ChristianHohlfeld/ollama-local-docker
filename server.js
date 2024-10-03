const express = require('express');
const httpProxy = require('http-proxy');
const cors = require('cors');  // Add CORS middleware

const app = express();
const apiProxy = httpProxy.createProxyServer();

// Enable CORS for all routes
app.use(cors());

// Proxy configuration: Forward requests to the Ollama API
const OLLAMA_API_URL = 'http://127.0.0.1:11434'; // Ollama API URL

// Proxy requests to the Ollama API
app.use('/ollama', (req, res) => {
    apiProxy.web(req, res, { target: OLLAMA_API_URL });
});

// Serve static WebUI from the "static" folder
app.use('/webui', express.static('static'));

// Start the HTTP server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`[${new Date().toISOString()}] WebUI server running on port ${PORT}`);
});

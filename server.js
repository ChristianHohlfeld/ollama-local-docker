// server.js

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Ollama API URL
const OLLAMA_API_URL = 'http://host.docker.internal:11434';

// Proxy configuration
app.use(
  '/webui/api',
  createProxyMiddleware({
    target: OLLAMA_API_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/webui/api': '/api',
    },
    logLevel: 'debug',
    onProxyReq: (proxyReq, req, res) => {
      console.log(`[ProxyReq] ${req.method} ${req.originalUrl} => ${OLLAMA_API_URL}${proxyReq.path}`);
    },
    onProxyRes: (proxyRes, req, res) => {
      console.log(`[ProxyRes] ${req.method} ${req.originalUrl} => ${proxyRes.statusCode}`);
    },
    onError: (err, req, res) => {
      console.error('[Proxy Error]', err);
      res.status(500).send('Proxy Error: ' + err.message);
    },
    timeout: 10000,
    proxyTimeout: 10000,
  })
);

// Serve static files from the '/webui' path
app.use('/webui', express.static('static'));

// Start the HTTP server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`WebUI server running on port ${PORT}`);
});

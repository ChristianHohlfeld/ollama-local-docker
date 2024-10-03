
# Ollama Local Docker Setup

This repository contains a basic setup for hosting a local Ollama API and web UI using Docker. It includes:

- A Docker container for the Ollama API
- A simple web UI served via an Express server

## Structure

```
.
├── Dockerfile
├── certs
├── docker-compose.yml
├── package.json
├── server.js
└── static
    └── index.html
```

## Usage

1. Clone the repository.
2. Run `docker compose up -d --build` to build and start the containers.
3. Access the web UI at `http://localhost:3001/webui`.
4. Use the Ollama API at `http://localhost:11434/api/generate`.

## Download
[Download this repository](https://github.com/ChristianHohlfeld/ollama-local-docker/archive/refs/heads/main.zip)

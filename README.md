
# Ollama Local Docker

Run Ollama's powerful AI models locally with a user-friendly web UI. This setup leverages Docker to run both the Ollama API and a custom web interface, allowing you to interact seamlessly with language models like llama3.2.

## Features

- **Local API Access**: Host and query Ollama’s API locally on your machine.
- **Simple Docker Setup**: Easy to deploy and run using Docker containers.
- **Interactive Web Interface**: Chat with AI models through an intuitive web UI.
- **Model Download**: Quickly download large models like `llama3.2` for local inference.

## Running the Project

1. Clone this repository to your local machine.
2. Build and run the Docker containers using:
   ```bash
   docker-compose up --build
   ```
3. To download the `llama3.2:1b` model, run:
   ```bash
   curl -X POST http://localhost:11434/api/pull -H "Content-Type: application/json" -d '{"model": "llama3.2:1b"}'
   ```
   For larger models, use:
   ```bash
   curl -X POST http://localhost:11434/api/pull -H "Content-Type: application/json" -d '{"model": "llama3.2"}'
   ```
4. Access the web UI at [http://localhost:3001/webui](http://localhost:3001/webui).

## Tags

- AI models
- Ollama API
- Language models
- Docker AI setup
- llama3.2
- Local AI server
- NLP models
- Web UI for AI
- Ollama integration
- Run AI locally

## Ollama API Documentation

Explore the full capabilities of the Ollama API by visiting the [official Ollama API documentation]([https://ollama.com/docs/api](https://github.com/ollama/ollama/blob/main/docs/api.md)).


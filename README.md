
# Ollama Local Docker

This repository contains a simple setup to run Ollama's API locally with a web UI. It uses Docker to run both the Ollama API and the web interface.

For more details on the Ollama API, refer to the official [Ollama API documentation](https://ollama.com/docs/api).

## Running the Project

1. Clone the repository.
2. Build the Docker images and start the containers using:
   ```bash
   docker-compose up --build
   ```
4. To download the `llama3.2:1b` model, you can use the following `curl` command:

```bash
# Download llama3.2:1b model
curl -X POST http://localhost:11434/api/pull -H "Content-Type: application/json" -d '{"model": "llama3.2:1b"}'
```
5. Open `http://localhost:3001/webui` in your browser to interact with the web UI.

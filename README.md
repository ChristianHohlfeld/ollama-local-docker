
# Ollama Local Docker

This repository provides a streamlined setup to run **Ollama's API** locally with a user-friendly web UI. It leverages **Docker** to manage both the Ollama API service and the web interface, allowing for easy deployment and interaction with models like `llama3.2:1b`.

<img src="https://github.com/ChristianHohlfeld/ollama-local-docker/blob/main/ohlama.png" alt="Oh, Lama!" width="100" height="100">

## Features
- Run **Ollama's API** locally for private use.
- Simple Docker setup for **quick deployment**.
- Supports models like `llama3.2:1b` and larger versions.
- Web UI for interacting with the models directly from your browser.

## Running the Project

1. Clone the repository.
2. Build the Docker images and start the containers using:
    ```bash
    docker-compose up --build
    ```
3. Download the desired model using a `curl` command:
    ```bash
    # Download llama3.2:1b model
    curl -X POST http://localhost:11434/api/pull -H "Content-Type: application/json" -d '{"model": "llama3.2:1b"}'
    ```
    Or use a larger model:
    ```bash
    # Download llama3.2 model
    curl -X POST http://localhost:11434/api/pull -H "Content-Type: application/json" -d '{"model": "llama3.2"}'
    ```

4. Open [http://localhost:3001/webui](http://localhost:3001/webui) in your browser to interact with the web UI.

## Ollama API Documentation

For further details on the **Ollama API**, visit the [official Ollama API documentation](https://github.com/ollama/ollama/blob/main/docs/api.md).

## Tags
- **Ollama API**: The core API providing machine learning models locally.
- **Llama3.2**: AI model for text generation.
- **Docker Setup**: Simplified containerized deployment.
- **Web UI for AI Models**: Easy interaction through the web interface.
- **Local AI Deployment**: Run AI models privately on your system.
- **Model Download**: Commands for downloading and using different AI models.
- **Machine Learning**: Deploy state-of-the-art machine learning models locally.
- **Artificial Intelligence**: Use AI models like Llama3.2 efficiently.
- **Quick Deployment**: Get your API and UI up and running quickly.
